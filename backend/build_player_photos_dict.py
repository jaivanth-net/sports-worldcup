import json
import urllib.request
import urllib.parse
import time
import os
import sys

# Ensure stdout handles unicode cleanly
sys.stdout.reconfigure(encoding='utf-8')

def fetch_wikipedia_photo(player_name):
    clean_name = player_name.split(' (')[0].strip()
    headers = {'User-Agent': 'SportsWorldCupApp/1.0 (contact@example.com)'}
    
    queries = [clean_name, f"{clean_name} (cricketer)", f"{clean_name} (footballer)"]
    
    for q in queries:
        url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{urllib.parse.quote(q)}"
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=3) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                if 'thumbnail' in data and 'source' in data['thumbnail']:
                    src = data['thumbnail']['source']
                    src = src.replace('/330px-', '/500px-').replace('/220px-', '/500px-')
                    return src
        except Exception:
            continue
    return None

def main():
    if not os.path.exists('all_players.json'):
        print("all_players.json missing!")
        return

    with open('all_players.json', 'r', encoding='utf-8') as f:
        all_data = json.load(f)

    c_players = all_data.get('cricket', [])
    f_players = all_data.get('football', [])

    photo_map = {}
    all_unique = sorted(list(set(c_players + f_players)))
    print(f"Total Unique Players to query: {len(all_unique)}")

    for idx, name in enumerate(all_unique):
        src = fetch_wikipedia_photo(name)
        if src:
            photo_map[name] = src
            print(f"[{idx+1}/{len(all_unique)}] [OK] {name}")
        else:
            print(f"[{idx+1}/{len(all_unique)}] [MISS] {name}")
        time.sleep(0.02)

    with open('public/player_photos.json', 'w', encoding='utf-8') as f:
        json.dump(photo_map, f, indent=2)
    print(f"SUCCESS: Saved {len(photo_map)} player photo URLs to public/player_photos.json")

if __name__ == '__main__':
    main()
