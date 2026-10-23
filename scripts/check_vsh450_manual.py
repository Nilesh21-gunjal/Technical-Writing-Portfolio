"""Check cross-references and publication inventory for VSH450-SM-001."""

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET


MANUAL = Path(__file__).resolve().parents[1] / "work/vacuum-pump-service-manual/index.html"


class Inventory(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.references = []
        self.figures = []
        self.tables = []
        self.parts = []
        self.headings = []

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        item_id = data.get("id")
        if item_id:
            self.ids.append(item_id)
            if tag == "figure":
                self.figures.append(item_id)
            elif tag == "table":
                self.tables.append(item_id)
            elif tag == "tr" and item_id.startswith("part-"):
                self.parts.append(item_id)
        if tag == "a" and data.get("href", "").startswith("#"):
            self.references.append(data["href"][1:])
        if re.fullmatch(r"h[1-6]", tag):
            self.headings.append(int(tag[1]))


def main():
    source = MANUAL.read_text(encoding="utf-8")
    doc = Inventory()
    doc.feed(source)
    problems = []
    duplicates = [name for name, count in Counter(doc.ids).items() if count > 1]
    if duplicates:
        problems.append(f"Duplicate IDs: {duplicates}")
    missing = sorted(set(doc.references) - set(doc.ids))
    if missing:
        problems.append(f"Broken internal references: {missing}")
    if doc.headings.count(1) != 1:
        problems.append("Manual must have exactly one H1")
    if len(doc.figures) != 17:
        problems.append(f"Expected 17 numbered figures, found {len(doc.figures)}")
    if len(doc.parts) != 49:
        problems.append(f"Expected 49 illustrated parts, found {len(doc.parts)}")
    glossary = source.split('<section id="glossary"', 1)[1].split("</section>", 1)[0]
    glossary_terms = len(re.findall(r"<dt>", glossary))
    if glossary_terms < 50:
        problems.append(f"Glossary needs at least 50 entries, found {glossary_terms}")
    acronyms = source.split('<section id="acronyms"', 1)[1].split("</section>", 1)[0]
    acronym_terms = len(re.findall(r'<th scope="row">', acronyms))
    if acronym_terms < 30:
        problems.append(f"Acronym list needs at least 30 entries, found {acronym_terms}")
    if source.count("Portfolio Demonstration Manual - Equipment and specifications are fictional and created for technical writing demonstration purposes.") != 1:
        problems.append("Cover disclaimer must appear exactly once")
    if "MANUAL_SECTIONS_CONTINUE" in source or "ILLUSTRATED_ASSEMBLIES_CONTINUE" in source:
        problems.append("Unfinished publication marker")
    figure_list = source.split('<nav aria-label="List of figures">', 1)[1].split("</nav>", 1)[0]
    table_list = source.split('<nav aria-label="List of tables">', 1)[1].split("</nav>", 1)[0]
    for figure in doc.figures:
        if f'href="#{figure}"' not in figure_list:
            problems.append(f"Figure missing from list: {figure}")
    for table in doc.tables:
        if table.startswith("tbl-") and not re.search(r"<caption>Table ", source[source.find(f'id="{table}"'):source.find(f'id="{table}"') + 180]):
            problems.append(f"Numbered table has no caption: {table}")
        if table.startswith("tbl-") and f'href="#{table}"' not in table_list:
            problems.append(f"Table missing from list: {table}")
    dita_dir = MANUAL.parent / "source"
    for dita in list(dita_dir.glob("*.dita")) + list(dita_dir.glob("*.ditamap")):
        try:
            root = ET.parse(dita).getroot()
            for element in root.iter():
                for name in ("href", "conref"):
                    ref = element.get(name, "")
                    if not ref or "://" in ref:
                        continue
                    target_file, _, target_id = ref.partition("#")
                    target = dita_dir / target_file
                    if not target.exists():
                        problems.append(f"Missing DITA target: {dita.name}: {ref}")
                    elif target_id:
                        target_tree = ET.parse(target).getroot()
                        leaf_id = target_id.split("/")[-1]
                        if not any(node.get("id") == leaf_id for node in target_tree.iter()):
                            problems.append(f"Missing DITA target ID: {dita.name}: {ref}")
        except ET.ParseError as error:
            problems.append(f"Invalid DITA XML: {dita.name}: {error}")
    if problems:
        print("\n".join(problems), file=sys.stderr)
        return 1
    print(f"VSH-450 manual OK: {len(doc.figures)} figures, {len(doc.tables)} tables, {len(doc.parts)} parts, {glossary_terms} glossary terms, {acronym_terms} acronyms; all internal references resolve.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
