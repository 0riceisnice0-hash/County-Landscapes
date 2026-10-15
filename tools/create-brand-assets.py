"""Rebuild deterministic branding/social assets. Requires Python and Pillow.
Run from the repo root: node --input-type=module -e "import {shareCards} from './presentation.mjs'; console.log(JSON.stringify(shareCards))" | python tools/create-brand-assets.py
"""
import json
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
GREEN, CREAM, GOLD = '#163b2d', '#f8f7f2', '#dfc66f'

def emblem(size, maskable=False):
    # Match favicon.svg, drawn at 4x resolution for crisp small raster icons.
    factor = 4
    canvas = Image.new('RGB', (size * factor, size * factor), GREEN)
    draw = ImageDraw.Draw(canvas)
    scale = size * factor / 128
    def points(values): return [(round(x*scale), round(y*scale)) for x,y in values]
    if maskable:
        mark = emblem(round(size * .7))
        canvas.paste(mark.resize((round(size*factor*.7),round(size*factor*.7))), (round(size*factor*.15),round(size*factor*.15)))
    else:
        draw.ellipse(tuple(round(n*scale) for n in (44,16,80,52)), fill=GOLD)
        draw.polygon(points([(15,61),(43,36),(71,61),(62,61),(62,96),(24,96),(24,61)]),fill=CREAM)
        draw.rectangle(tuple(round(n*scale) for n in (39,70,49,96)),fill=GREEN)
        draw.rectangle(tuple(round(n*scale) for n in (88,57,96,96)),fill=CREAM)
        for bounds in [(71,36,109,76),(61,45,97,81),(83,47,119,81)]:
            draw.ellipse(tuple(round(n*scale) for n in bounds),fill=CREAM)
        draw.line(points([(16,107),(42,101),(65,106),(89,99),(113,104)]),fill=GOLD,width=max(1,round(6*scale)),joint='curve')
    return canvas.resize((size,size),Image.Resampling.LANCZOS)

for size in (16,32,48,96): emblem(size).save(ROOT/f'favicon-{size}x{size}.png',optimize=True)
emblem(256).save(ROOT/'favicon.ico',sizes=[(16,16),(32,32),(48,48),(64,64),(128,128),(256,256)])
emblem(180).save(ROOT/'apple-touch-icon.png',optimize=True)
for size in (192,512): emblem(size).save(ROOT/f'android-chrome-{size}x{size}.png',optimize=True)
emblem(512,maskable=True).save(ROOT/'android-maskable-512x512.png',optimize=True)
emblem(144).save(ROOT/'mstile-144x144.png',optimize=True)

logo = Image.open(ROOT/'assets/logo.png').convert('RGB')
for size in (148,296):
    logo.resize((size,size),Image.Resampling.LANCZOS).save(ROOT/f'assets/logo-{size}.webp','WEBP',quality=85,method=6)

def font(size,bold=False):
    for path in [Path('C:/Windows/Fonts/segoeuib.ttf' if bold else 'C:/Windows/Fonts/segoeui.ttf'),Path('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf' if bold else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf')]:
        if path.exists(): return ImageFont.truetype(str(path),size)
    raise RuntimeError('Install Segoe UI or DejaVu Sans to render share cards')

def wrap(draw,text,face,width):
    lines=[]
    for word in text.split():
        if not lines or draw.textlength(lines[-1]+' '+word,font=face)>width: lines.append(word)
        else: lines[-1]+=' '+word
    return lines

cards=json.load(sys.stdin)
(ROOT/'assets/social').mkdir(exist_ok=True)
for card in cards:
    image=Image.new('RGB',(1200,630),GREEN)
    photo=ImageOps.fit(Image.open(ROOT/card['photo']).convert('RGB'),(600,630),Image.Resampling.LANCZOS)
    image.paste(photo,(600,0))
    draw=ImageDraw.Draw(image)
    draw.rectangle((600,0,610,630),fill=GOLD)
    image.paste(logo.resize((158,158),Image.Resampling.LANCZOS),(48,32))
    draw.text((48,215),'COUNTY LANDSCAPES',font=font(19,True),fill=GOLD)
    for size in range(54,37,-2):
        face=font(size,True);lines=wrap(draw,card['label'],face,500)
        if len(lines)<=3: break
    for index,line in enumerate(lines): draw.text((46,259+index*(size+8)),line,font=face,fill=CREAM)
    draw.text((48,478),'Leicestershire · Free quotes',font=font(23),fill=CREAM)
    draw.line((48,527,548,527),fill='#597362',width=1)
    draw.text((48,548),'07526 024115',font=font(29,True),fill=GOLD)
    draw.text((48,592),'countylandscape.co.uk',font=font(18),fill=CREAM)
    image.save(ROOT/card['image'],'JPEG',quality=85,optimize=True,progressive=True)

for name in ['garden-landscaping.jpg','fenced-garden.webp','garden-trees.jpg','patio-cleaning.jpg']:
    original=Image.open(ROOT/'assets'/name).convert('RGB')
    widths=sorted(set(min(width,original.width) for width in (360,480,640,720,800,960,1200,1600)))
    for width in widths:
        scaled=original.resize((width,round(original.height*width/original.width)),Image.Resampling.LANCZOS)
        stem=Path(name).stem
        scaled.save(ROOT/f'assets/{stem}-{width}.webp','WEBP',quality=68,method=6)
        scaled.save(ROOT/f'assets/{stem}-{width}.avif','AVIF',quality=48,speed=6)
print(f'Rebuilt icons, responsive logos, {len(cards)} share cards and photo variants.')
