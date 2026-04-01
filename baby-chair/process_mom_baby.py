import io
import sys
from PIL import Image
try:
    from rembg import remove
except ImportError:
    print("rembg is not installed yet")
    sys.exit(1)

input_path = "mom-baby.png"
output_path = "mom-baby-transparent.webp"

with open(input_path, 'rb') as i:
    input_data = i.read()

print("Removing background...")
try:
    output_data = remove(input_data)
except Exception as e:
    print(f"Error removing background: {e}")
    sys.exit(1)

print("Opening transparent image with Pillow...")
img = Image.open(io.BytesIO(output_data))

# Resize or compress if needed to match other web images cleanly
# Typically the "mommy.webp" was 274x382 or similar, but let's just optimize the WebP
# We will save it with good quality. WebP natively supports transparency.
print("Saving as WebP...")
img.save(output_path, "WEBP", quality=80, method=6)
print(f"Saved optimized webp to {output_path}")
