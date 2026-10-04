import re
import json

def get_players(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()
    names = set()
    # match name: "..." or name: '...'
    matches = re.findall(r'name:\s*["\']([^"\']+)["\']', text)
    for m in matches:
        names.add(m.strip())
    # also match manOfTheMatch, manOfTheSeries
    moms = re.findall(r'manOfTheMatch:\s*["\']([^"\']+)["\']', text)
    for m in moms:
        names.add(m.strip())
    mos = re.findall(r'manOfTheSeries:\s*["\']([^"\']+)["\']', text)
    for m in mos:
        names.add(m.strip())
    return sorted(list(names))

cricket_players = get_players('data/cricketData.js')
football_players = get_players('data/footballData.js')

print(f"Cricket Players count: {len(cricket_players)}")
print(f"Football Players count: {len(football_players)}")

with open('all_players.json', 'w', encoding='utf-8') as f:
    json.dump({'cricket': cricket_players, 'football': football_players}, f, indent=2)
print("Saved all_players.json")
