import os
import sys
from PIL import Image, ImageEnhance, ImageFilter, ImageOps
import numpy as np

def remove_bg_and_save(input_path, output_path):
    print(f"Removing background from {input_path}...")
    from rembg import remove
    with open(input_path, 'rb') as i:
        input_data = i.read()
        output_data = remove(input_data)
        with open(output_path, 'wb') as o:
            o.write(output_data)
    print(f"Saved cutout to {output_path}")

def main():
    players = ['kohli', 'dhoni', 'buttler', 'gayle', 'messi', 'ronaldo', 'neymar', 'mbappe']
    for p in players:
        in_file = f"{p}.jpg"
        out_file = f"{p}_cutout.png"
        if not os.path.exists(out_file) and os.path.exists(in_file):
            remove_bg_and_save(in_file, out_file)
        else:
            print(f"Cutout {out_file} already exists or input missing.")

if __name__ == "__main__":
    main()
