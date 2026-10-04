import os
import sys
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw, ImageOps
import numpy as np

def create_radial_vignette(width, height, center_x, center_y, rx, ry, inner_alpha=0, outer_alpha=230):
    mask = Image.new('L', (width, height), outer_alpha)
    draw = ImageDraw.Draw(mask)
    
    # Create radial gradient overlay
    for r in range(max(rx, ry), 0, -2):
        factor = r / max(rx, ry)
        alpha = int(inner_alpha + (outer_alpha - inner_alpha) * (factor ** 1.8))
        bbox = [
            center_x - r * (rx / max(rx, ry)),
            center_y - r * (ry / max(rx, ry)),
            center_x + r * (rx / max(rx, ry)),
            center_y + r * (ry / max(rx, ry))
        ]
        draw.ellipse(bbox, fill=alpha)
    return mask

def add_rim_light(img, color_rgb, intensity=0.6):
    # img is RGBA
    r, g, b, a = img.split()
    # Find edges of alpha
    edges = a.filter(ImageFilter.FIND_EDGES)
    edges = edges.filter(ImageFilter.GaussianBlur(3))
    
    rim = Image.new('RGBA', img.size, color_rgb + (0,))
    rim.putalpha(edges)
    
    # Blend rim back into img
    return Image.alpha_composite(img, rim)

def process_and_composite():
    stadium_path = r"C:\Users\DELL\.gemini\antigravity-ide\brain\0487fb4d-c0bb-4868-a1c0-a38b589def64\empty_stadium_hero_bg_1791089062449.png"
    if not os.path.exists(stadium_path):
        print("Stadium background not found!")
        return

    canvas_w, canvas_h = 1920, 1080
    bg = Image.open(stadium_path).convert('RGBA').resize((canvas_w, canvas_h), Image.Resampling.LANCZOS)
    
    # Darken background slightly and enhance contrast
    enhancer = ImageEnhance.Brightness(bg)
    bg = enhancer.enhance(0.7)
    enhancer = ImageEnhance.Contrast(bg)
    bg = enhancer.enhance(1.2)

    # Load cutouts
    cutouts = {}
    players = ['kohli', 'dhoni', 'buttler', 'gayle', 'messi', 'ronaldo', 'neymar', 'mbappe']
    for p in players:
        c_path = f"{p}_cutout.png"
        if os.path.exists(c_path):
            cutouts[p] = Image.open(c_path).convert('RGBA')
        else:
            print(f"Missing cutout: {c_path}")

    # Composition canvas
    composite = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    composite.paste(bg, (0, 0))

    # Define placement configs for each player (x_offset, y_offset, target_height, flip, glow_color, alpha)
    # Left side (Cricket)
    cricket_placements = [
        ('gayle', -50, 200, 780, False, (255, 180, 50), 0.88),
        ('buttler', 180, 240, 760, False, (255, 200, 80), 0.90),
        ('dhoni', 60, 260, 820, False, (255, 215, 0), 0.95),
        ('kohli', 300, 180, 900, False, (255, 230, 100), 1.0),
    ]

    # Right side (Football)
    football_placements = [
        ('mbappe', 1280, 200, 780, True, (0, 150, 255), 0.88),
        ('neymar', 1040, 220, 760, True, (0, 180, 255), 0.90),
        ('ronaldo', 1180, 240, 840, True, (0, 200, 255), 0.95),
        ('messi', 920, 180, 900, True, (50, 220, 255), 1.0),
    ]

    for p_name, x, y, h, flip, glow, opacity in cricket_placements + football_placements:
        if p_name not in cutouts:
            continue
        p_img = cutouts[p_name]
        
        # Calculate width preserving aspect ratio
        aspect = p_img.width / p_img.height
        w = int(h * aspect)
        p_resized = p_img.resize((w, h), Image.Resampling.LANCZOS)
        
        if flip:
            p_resized = ImageOps.mirror(p_resized)
            
        # Adjust opacity if needed
        if opacity < 1.0:
            r, g, b, a = p_resized.split()
            a = a.point(lambda p: int(p * opacity))
            p_resized.putalpha(a)

        # Enhance color sharpness slightly
        p_resized = ImageEnhance.Color(p_resized).enhance(1.15)
        p_resized = ImageEnhance.Sharpness(p_resized).enhance(1.2)

        # Add subtle glow / rim light
        p_rim = add_rim_light(p_resized, glow, intensity=0.4)
        
        # Paste onto composite
        composite.alpha_composite(p_rim, (x, y))

    # Center Dark Vignette for UI Text & Logos readability
    dark_overlay = Image.new('RGBA', (canvas_w, canvas_h), (5, 10, 25, 0))
    draw_ov = ImageDraw.Draw(dark_overlay)
    
    # Center oval dark shadow behind hero text
    for r in range(500, 0, -5):
        alpha = int((1.0 - (r / 500)) * 210)
        draw_ov.ellipse([960 - r * 1.2, 540 - r * 0.9, 960 + r * 1.2, 540 + r * 0.9], fill=(4, 9, 20, alpha))
        
    # Bottom gradient overlay for seamless dark page transition
    bottom_fade = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    draw_bf = ImageDraw.Draw(bottom_fade)
    for y_pos in range(700, 1080):
        factor = (y_pos - 700) / 380
        alpha = int((factor ** 1.5) * 255)
        draw_bf.line([(0, y_pos), (canvas_w, y_pos)], fill=(4, 9, 20, alpha))

    final_img = Image.alpha_composite(composite, dark_overlay)
    final_img = Image.alpha_composite(final_img, bottom_fade)

    # Convert to RGB and save high quality JPEG & PNG
    final_rgb = final_img.convert('RGB')
    
    target_jpg = r"c:\Users\DELL\.antigravity-ide\sports-worldcup\backend\public\user_hero.jpg"
    target_png = r"c:\Users\DELL\.antigravity-ide\sports-worldcup\backend\public\real_legends_bg.png"
    
    final_rgb.save(target_jpg, 'JPEG', quality=95)
    final_rgb.save(target_png, 'PNG')
    print(f"Successfully generated real legends background at:\n{target_jpg}\n{target_png}")

if __name__ == "__main__":
    process_and_composite()
