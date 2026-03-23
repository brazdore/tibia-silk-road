import csv
import logging
from pathlib import Path
from bs4 import BeautifulSoup

INPUT_FILE = Path("tibiapal_deliveries.htm")
OUTPUT_DIR = Path("output")
OUTPUT_DIR.mkdir(exist_ok=True)

TXT_FILE = OUTPUT_DIR / "tibiapal_delivery_items.txt"
CSV_FILE = OUTPUT_DIR / "tibiapal_delivery_items.csv"
LOG_FILE = OUTPUT_DIR / "tibiapal_delivery_items.log"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler()
    ],
)

def parse_delivery_table(path: Path):
    if not path.exists():
        logging.error("Input file not found: %s", path)
        return []

    html = path.read_text(encoding="utf-8", errors="ignore")
    logging.info("Loaded file: %s", path)
    logging.info("HTML length: %s chars", len(html))

    soup = BeautifulSoup(html, "html.parser")

    table = soup.find("table", id="deliveries_table_everything")
    if table is None:
        logging.error("Table id 'deliveries_table_everything' not found.")
        return []

    rows = table.find_all("tr")
    logging.info("Found %s table rows", len(rows))

    items = []

    for idx, row in enumerate(rows[1:], start=2):  # skip header row
        cols = row.find_all("td")

        if len(cols) < 2:
            logging.debug("Skipping row %s: expected at least 2 td cells", idx)
            continue

        name_cell = cols[1]
        link = name_cell.find("a")

        if link:
            name = link.get_text(strip=True)
        else:
            name = name_cell.get_text(" ", strip=True)

        if not name:
            logging.debug("Skipping row %s: empty item name", idx)
            continue

        items.append(name)

    unique_items = list(dict.fromkeys(items))
    logging.info("Extracted %s raw items", len(items))
    logging.info("Extracted %s unique items", len(unique_items))

    return unique_items

def save_items(items):
    with open(TXT_FILE, "w", encoding="utf-8") as f:
        for item in items:
            f.write(item + "\n")

    with open(CSV_FILE, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["item_name"])
        for item in items:
            writer.writerow([item])

    logging.info("Saved %s items to %s", len(items), TXT_FILE)
    logging.info("Saved %s items to %s", len(items), CSV_FILE)

def main():
    items = parse_delivery_table(INPUT_FILE)
    save_items(items)

if __name__ == "__main__":
    main()