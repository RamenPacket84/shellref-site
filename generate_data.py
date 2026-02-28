#!/usr/bin/env python3
"""
generate_data.py — ShellRef Website Content Generator
------------------------------------------------------
Reads all 15 JSON content files from the iOS project and writes
data.js, which embeds every section as a single JavaScript variable.

Run this whenever iOS content changes:
    cd ~/Development/ShellRefSite
    python3 generate_data.py
"""

import json
import os
from pathlib import Path

# Path to the iOS project content directory
IOS_ROOT = Path.home() / "Development" / "iOS_Apps" / "ShellRef" / "ShellRef"

# Manifest — same order as ContentLoader.swift
MANIFEST = [
    # Bash
    ("history",         "Content/bash"),
    ("basics",          "Content/bash"),
    ("control_flow",    "Content/bash"),
    ("functions",       "Content/bash"),
    ("strings_arrays",  "Content/bash"),
    ("file_io",         "Content/bash"),
    ("processes",       "Content/bash"),
    ("best_practices",  "Content/bash"),
    # Zsh
    ("zsh_differences", "Content/zsh"),
    ("zsh_globbing",    "Content/zsh"),
    ("zsh_arrays",      "Content/zsh"),
    ("zsh_config",      "Content/zsh"),
    # Cross-shell commands
    ("text_processing", "Content/commands"),
    ("file_commands",   "Content/commands"),
    ("system_commands", "Content/commands"),
]

def load_sections():
    sections = []
    for resource, subdir in MANIFEST:
        path = IOS_ROOT / subdir / f"{resource}.json"
        if not path.exists():
            print(f"  SKIP  {path} (not found)")
            continue
        try:
            with open(path, "r", encoding="utf-8") as f:
                data = f.read().strip()
            if not data:
                print(f"  SKIP  {path} (empty)")
                continue
            section = json.loads(data)
            sections.append(section)
            print(f"  OK    {subdir}/{resource}.json  ({len(section.get('topics', []))} topics)")
        except json.JSONDecodeError as e:
            print(f"  ERROR {path}: {e}")
    return sections

def write_data_js(sections):
    out_path = Path(__file__).parent / "data.js"
    js = "// Auto-generated — run: python3 generate_data.py\n"
    js += "// Do not edit by hand.\n\n"
    js += "const SHELLREF_CONTENT = "
    js += json.dumps(sections, indent=2, ensure_ascii=False)
    js += ";\n"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(js)
    print(f"\nWrote {out_path}  ({len(sections)} sections, {sum(len(s.get('topics',[])) for s in sections)} topics total)")

if __name__ == "__main__":
    print("ShellRef — generating data.js")
    print(f"Source: {IOS_ROOT}\n")
    sections = load_sections()
    if sections:
        write_data_js(sections)
    else:
        print("No sections loaded — data.js not written.")
