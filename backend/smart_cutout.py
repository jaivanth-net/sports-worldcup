import os
import cv2
import numpy as np
from PIL import Image, ImageFilter

def grabcut_extract(input_path, output_path, margin_percent=0.04):
    print(f"Processing GrabCut for {input_path}...")
    img = cv2.imread(input_path)
    if img is None:
        print(f"Error loading {input_path}")
        return False

    h, w = img.shape[:2]
    
    # Define bounding box around subject (leaving small margin)
    mx = int(w * margin_percent)
    my = int(h * margin_percent)
    rect = (mx, my, w - 2 * mx, h - 2 * my)

    mask = np.zeros((h, w), np.uint8)
    bgdModel = np.zeros((1, 65), np.float64)
    fgdModel = np.zeros((1, 65), np.float64)

    # Run GrabCut iterations
    cv2.grabCut(img, mask, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)

    # Mask: 0 & 2 = background, 1 & 3 = foreground
    mask2 = np.where((mask == 1) | (mask == 3), 255, 0).astype('uint8')

    # Convert BGR to RGBA
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[:, :, :3] = img_rgb
    rgba[:, :, 3] = mask2

    pil_img = Image.fromarray(rgba)
    
    # Smooth edges with slight blur on alpha channel
    r, g, b, a = pil_img.split()
    a_smooth = a.filter(ImageFilter.GaussianBlur(1.5))
    pil_img.putalpha(a_smooth)

    pil_img.save(output_path, 'PNG')
    print(f"Saved clean cutout to {output_path}")
    return True

def main():
    players = ['kohli', 'dhoni', 'buttler', 'gayle', 'messi', 'ronaldo', 'neymar', 'mbappe']
    for p in players:
        in_file = f"{p}.jpg"
        out_file = f"{p}_cutout.png"
        if os.path.exists(in_file):
            grabcut_extract(in_file, out_file)

if __name__ == "__main__":
    main()
