import os
import cv2
import numpy as np
from PIL import Image, ImageFilter

def extract_fast(p_name):
    in_file = f"{p_name}.jpg"
    out_file = f"{p_name}_cutout.png"
    if os.path.exists(out_file) and os.path.getsize(out_file) > 0:
        print(f"Skipping {p_name}, already exists.")
        return

    print(f"Optimized extracting {p_name}...")
    img = cv2.imread(in_file)
    if img is None:
        print(f"Cannot read {in_file}")
        return
        
    h, w = img.shape[:2]
    # Scale down for fast processing if height > 1000
    scale = 1.0
    if h > 1000:
        scale = 1000.0 / h
        new_w, new_h = int(w * scale), 1000
        img = cv2.resize(img, (new_w, new_h), interpolation=cv2.INTER_AREA)
        h, w = new_h, new_w

    mx = max(5, int(w * 0.04))
    my = max(5, int(h * 0.04))
    rect = (mx, my, w - 2 * mx, h - 2 * my)

    mask = np.zeros((h, w), np.uint8)
    bgd = np.zeros((1, 65), np.float64)
    fgd = np.zeros((1, 65), np.float64)

    cv2.grabCut(img, mask, rect, bgd, fgd, 3, cv2.GC_INIT_WITH_RECT)
    mask2 = np.where((mask == 1) | (mask == 3), 255, 0).astype('uint8')

    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[:, :, :3] = img_rgb
    rgba[:, :, 3] = mask2

    pil_img = Image.fromarray(rgba)
    r, g, b, a = pil_img.split()
    a_smooth = a.filter(ImageFilter.GaussianBlur(1.2))
    pil_img.putalpha(a_smooth)

    pil_img.save(out_file, 'PNG')
    print(f"[DONE] {p_name} cutout saved.")

def main():
    players = ['gayle', 'messi', 'ronaldo', 'neymar', 'mbappe']
    for p in players:
        extract_fast(p)

if __name__ == "__main__":
    main()
