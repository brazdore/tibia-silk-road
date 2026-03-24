import csv
import logging
import re
import time
from pathlib import Path
from urllib.parse import quote

from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

INPUT_CSV = Path("items.csv")                  # required column: item_name
OUTPUT_CSV = Path("items_with_weight.csv")     # output columns: item_name,item_weight
FAILED_CSV = Path("failed_items.csv")          # output columns: item_name,url,error
LOG_FILE = Path("extract_weight.log")

HEADLESS = True
NAVIGATION_TIMEOUT_MS = 30000
SELECTOR_TIMEOUT_MS = 12000
MAX_RETRIES = 3
SLEEP_BETWEEN_ITEMS = 1.0
SLEEP_BETWEEN_RETRIES = 2.0

WEIGHT_SELECTORS = [
    'div[data-source="weight"] .pi-data-value',
    '.pi-item.pi-data[data-source="weight"] .pi-data-value',
    '.portable-infobox div[data-source="weight"] .pi-data-value',
]

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler()
    ],
)

def build_item_url(item_name: str) -> str:
    slug = item_name.strip().replace(" ", "_")
    return "https://tibia.fandom.com/wiki/" + quote(slug, safe="_()!-'")

def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", value or "").strip()

def extract_numeric_weight(text: str) -> str:
    if not text:
        return ""

    match = re.search(r"It weighs\s+(\d+(?:\.\d+)?)\s*oz\b", text, re.IGNORECASE)
    if match:
        return match.group(1)

    match = re.search(r"(\d+(?:\.\d+)?)\s*oz\b", text, re.IGNORECASE)
    if match:
        return match.group(1)

    return ""

def extract_weight_from_dom(page) -> str:
    for selector in WEIGHT_SELECTORS:
        locator = page.locator(selector)
        try:
            if locator.count() > 0:
                text = clean_text(locator.first.inner_text())
                weight = extract_numeric_weight(text)
                if weight:
                    return weight
        except Exception:
            pass

    try:
        body_text = clean_text(page.locator("body").inner_text())
        weight = extract_numeric_weight(body_text)
        if weight:
            return weight
    except Exception:
        pass

    return ""

def extract_weight_from_html(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")
    text = clean_text(soup.get_text(" ", strip=True))
    return extract_numeric_weight(text)

def read_input_items(path: Path):
    with open(path, "r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        if "item_name" not in (reader.fieldnames or []):
            raise ValueError("Input CSV must contain column: item_name")

        items = []
        for row in reader:
            item_name = clean_text(row.get("item_name", ""))
            if item_name:
                items.append(item_name)

    return items

def save_results(rows, failed_rows):
    with open(OUTPUT_CSV, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["item_name", "item_weight"])
        writer.writeheader()
        writer.writerows(rows)

    with open(FAILED_CSV, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["item_name", "url", "error"])
        writer.writeheader()
        writer.writerows(failed_rows)

def main():
    items = read_input_items(INPUT_CSV)
    results = []
    failed = []

    logging.info("Loaded %s items from %s", len(items), INPUT_CSV)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=HEADLESS)
        context = browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/123.0.0.0 Safari/537.36"
            ),
            viewport={"width": 1440, "height": 900},
        )

        def route_handler(route):
            if route.request.resource_type in {"image", "media", "font"}:
                route.abort()
            else:
                route.continue_()

        context.route("**/*", route_handler)

        total = len(items)

        for index, item_name in enumerate(items, start=1):
            url = build_item_url(item_name)
            item_weight = ""
            last_error = ""
            item_start = time.perf_counter()

            logging.info("[%s/%s] Starting item: %s -> %s", index, total, item_name, url)

            for attempt in range(1, MAX_RETRIES + 1):
                page = context.new_page()
                page.set_default_timeout(SELECTOR_TIMEOUT_MS)

                try:
                    page.goto(url, wait_until="domcontentloaded", timeout=NAVIGATION_TIMEOUT_MS)
                    logging.info("[%s/%s] Page loaded successfully for %s (attempt %s/%s)",
                                 index, total, item_name, attempt, MAX_RETRIES)

                    item_weight = extract_weight_from_dom(page)

                    if not item_weight:
                        html = page.content()
                        item_weight = extract_weight_from_html(html)

                    if item_weight:
                        elapsed = time.perf_counter() - item_start
                        logging.info("[%s/%s] OK: %s -> %s (%.2fs)",
                                     index, total, item_name, item_weight, elapsed)
                        results.append({
                            "item_name": item_name,
                            "item_weight": item_weight
                        })
                        page.close()
                        break

                    last_error = "Weight not found"
                    logging.warning("[%s/%s] Attempt %s/%s: weight not found for %s",
                                    index, total, attempt, MAX_RETRIES, item_name)

                except PlaywrightTimeoutError:
                    last_error = "Timeout"
                    logging.warning("[%s/%s] Attempt %s/%s: timeout for %s",
                                    index, total, attempt, MAX_RETRIES, item_name)

                except Exception as e:
                    last_error = f"{type(e).__name__}: {e}"
                    logging.warning("[%s/%s] Attempt %s/%s: %s for %s",
                                    index, total, attempt, MAX_RETRIES, last_error, item_name)

                finally:
                    page.close()

                if attempt < MAX_RETRIES:
                    time.sleep(SLEEP_BETWEEN_RETRIES)

            else:
                elapsed = time.perf_counter() - item_start
                logging.error("[%s/%s] FAILED: %s (%s) after %.2fs",
                              index, total, item_name, last_error, elapsed)
                results.append({
                    "item_name": item_name,
                    "item_weight": ""
                })
                failed.append({
                    "item_name": item_name,
                    "url": url,
                    "error": last_error
                })

            total_elapsed = time.perf_counter() - item_start
            logging.info("[%s/%s] Finished item: %s in %.2fs",
                         index, total, item_name, total_elapsed)

            time.sleep(SLEEP_BETWEEN_ITEMS)

        context.close()
        browser.close()

    save_results(results, failed)
    logging.info("Saved results to %s", OUTPUT_CSV)
    logging.info("Saved failures to %s", FAILED_CSV)

if __name__ == "__main__":
    main()