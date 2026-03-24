#!/usr/bin/env python3
"""
Extract NPC buy items from a saved TibiaWiki/Fandom HTML page.

Usage:
    python extract_npc_buy_json.py rashid.htm rashid_items.json
"""

import json
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup


def infer_item_type(name: str) -> str:
    n = name.lower()

    if re.search(r"\b(wand)\b", n):
        return "Wand"
    if re.search(r"\b(rod)\b", n):
        return "Rod"
    if re.search(r"\b(arrow|bolt|spear|throwing star|throwing knife)\b", n):
        return "Ammunition"
    if re.search(r"\b(shield)\b", n):
        return "Shield"
    if re.search(r"\b(helmet|hat|hood|crown|mask|headband)\b", n):
        return "Helmet"
    if re.search(r"\b(legs|kilt|breeches|shorts)\b", n):
        return "Legs"
    if re.search(r"\b(boots|shoes)\b", n):
        return "Boots"
    if re.search(r"\b(amulet|pendant|necklace|brooch)\b", n):
        return "Amulet"
    if re.search(r"\b(ring)\b", n):
        return "Ring"
    if re.search(r"\b(armor|plate|mail|robe|dress|shirt|coat|cape|mantle)\b", n):
        return "Armor"
    if re.search(r"\b(sword|axe|mace|dagger|halberd|trident|sceptre|hammer|club|bow|crossbow|lance|maul|staff|blade|fists|bolter|naginata|cleaver|shovel)\b", n):
        return "Weapon"
    if re.search(r"\b(fang|shell|horn|fur|doll|banner)\b", n):
        return "Creature Product"
    if re.search(r"\b(ham|meat|fish|bread|cheese|whopper)\b", n):
        return "Food"

    return "Other"


def parse_price(text: str) -> int | None:
    m = re.search(r"(\d{1,3}(?:,\d{3})*|\d+)", text)
    if not m:
        return None
    return int(m.group(1).replace(",", ""))


def clean_item_name(cell) -> str:
    # Prefer the first wiki link title/text inside the item cell
    a_tags = cell.find_all("a", href=True)
    for a in a_tags:
        text = a.get_text(" ", strip=True)
        if text and not text.lower().startswith("notes"):
            return text

    text = cell.get_text(" ", strip=True)
    text = re.sub(r"\[\d+\]$", "", text).strip()
    text = re.sub(r"\s+", " ", text)
    return text


def extract_buy_items(html_path: Path) -> list[dict]:
    html = html_path.read_text(encoding="utf-8", errors="ignore")
    soup = BeautifulSoup(html, "html.parser")

    buys_container = soup.find(id="npc-trade-buys")
    if not buys_container:
        raise RuntimeError("Could not find #npc-trade-buys in the HTML file.")

    table = buys_container.find("table")
    if not table:
        raise RuntimeError("Could not find the buy table inside #npc-trade-buys.")

    items = []

    tbody = table.find("tbody") or table
    rows = tbody.find_all("tr")

    for row in rows:
        cols = row.find_all("td")
        if len(cols) < 3:
            continue

        item_name = clean_item_name(cols[1])
        price_text = cols[2].get_text(" ", strip=True)
        price = parse_price(price_text)

        if not item_name or price is None:
            continue

        items.append({
            "name": item_name,
            "npcPrice": price,
            "itemType": infer_item_type(item_name)
        })

    # Deduplicate by name, keep first seen
    deduped = {}
    for item in items:
        deduped.setdefault(item["name"], item)

    return list(deduped.values())


def infer_npc_name(soup: BeautifulSoup) -> str:
    title = soup.title.get_text(" ", strip=True) if soup.title else ""
    if title:
        return title.split("|")[0].strip().split("-")[0].strip()
    h1 = soup.find("h1")
    return h1.get_text(" ", strip=True) if h1 else "Unknown NPC"


def main():
    if len(sys.argv) < 3:
        print("Usage: python extract_npc_buy_json.py <input.html> <output.json>")
        sys.exit(1)

    input_file = Path(sys.argv[1])
    output_file = Path(sys.argv[2])

    if not input_file.is_file():
        print(f"Input file not found: {input_file}")
        sys.exit(1)

    html = input_file.read_text(encoding="utf-8", errors="ignore")
    soup = BeautifulSoup(html, "html.parser")

    npc_name = infer_npc_name(soup)
    items = extract_buy_items(input_file)
    items.sort(key=lambda x: x["npcPrice"], reverse=True)

    data = {
        "npcName": npc_name,
        "items": items,
        "totalItems": len(items),
        "totalValue": sum(i["npcPrice"] for i in items)
    }

    output_file.write_text(
        json.dumps(data, indent=2, ensure_ascii=False),
        encoding="utf-8"
    )

    print(f"✓ Extracted {len(items)} items from {input_file.name}")
    print(f"✓ Saved JSON to {output_file}")
    if items:
        print(f"Top item: {items[0]['name']} - {items[0]['npcPrice']:,} gp")


if __name__ == "__main__":
    main()
