#!/usr/bin/env python3
"""
Downloads FULL Fandom URLs with /revision/latest?cb=...&path-prefix=en&format=original
"""

import os
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

import requests
from playwright.sync_api import sync_playwright


ALLOWED_DOMAINS = (
    "static.wikia.nocookie.net",
    "static.wikia.nocookie.com", 
    "static.wikia.com",
    "vignette.wikia.nocookie.net",
)


def is_tibia_gif(url: str) -> bool:
    """Check if URL is Tibia GIF (no cleaning needed)."""
    parsed = urlparse(url)
    
    if not parsed.scheme.startswith("http"):
        return False
    
    if not any(d in parsed.netloc for d in ALLOWED_DOMAINS):
        return False
    
    # Check path contains .gif (before query params)
    path_lower = parsed.path.lower()
    return ".gif" in path_lower


def get_filename(url: str) -> str:
    """Extract filename from path (Abyss_Hammer.gif)."""
    parsed = urlparse(url)
    path_parts = parsed.path.split("/")
    
    # Find .gif segment
    gif_part = next((p for p in path_parts if p.lower().endswith(".gif")), None)
    
    if gif_part:
        fname = gif_part
    else:
        fname = path_parts[-1] + ".gif"
    
    # Sanitize
    return re.sub(r"[^A-Za-z0-9_.-]", "_", fname)


def extract_gifs_from_page(page_url: str) -> list[tuple[str, str]]:
    print(f"[browser] Loading {page_url}")
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        )
        page = context.new_page()
        
        page.goto(page_url, wait_until="networkidle")
        print("  ✓ Page loaded")
        
        imgs = page.query_selector_all("img")
        results = []
        
        for img in imgs:
            src = img.get_attribute("data-src") or img.get_attribute("src")
            if src and is_tibia_gif(src):
                filename = get_filename(src)
                results.append((src, filename))  # ← KEEP FULL URL
        
        # Deduplicate by filename
        unique = {}
        for url, fname in results:
            unique.setdefault(fname, url)
        
        browser.close()
        return [(url, fname) for fname, url in unique.items()]


def download_gifs(pairs: list[tuple[str, str]], out_dir: Path) -> None:
    """Download ALL images Fandom serves (WebP ok)."""
    out_dir.mkdir(parents=True, exist_ok=True)
    
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Referer": "https://tibia.fandom.com/",
        "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8"
    })
    
    saved = 0
    for i, (url, filename) in enumerate(pairs, 1):
        dest = out_dir / filename
        if dest.exists():
            print(f"[{i:3d}/{len(pairs)}] [skip] {filename}")
            continue

        print(f"[{i:3d}/{len(pairs)}] [get ] {filename}")
        try:
            resp = session.get(url, timeout=30)
            resp.raise_for_status()
            
            dest.write_bytes(resp.content)
            
            if len(resp.content) > 100:
                print(f"  ✓ {len(resp.content)} bytes")
                saved += 1
            else:
                dest.unlink()
                print("  ! empty")
                
        except Exception as e:
            print(f"  ! {e}")

    print(f"\n✓ Saved {saved}/{len(pairs)} images to {out_dir}")


def main():
    if len(sys.argv) < 3:
        print("Usage: python extract_gifs_playwright.py <URL> <output_dir>")
        sys.exit(1)

    page_url = sys.argv[1]
    out_dir = Path(sys.argv[2])

    pairs = extract_gifs_from_page(page_url)
    print(f"\nFound {len(pairs)} Tibia GIFs!")
    
    if pairs:
        download_gifs(pairs, out_dir)
        print(f"\n✓ Complete! {out_dir}")
    else:
        print("No GIFs found.")


if __name__ == "__main__":
    main()
