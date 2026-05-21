"""Extract images from ZABBOO PDF deck into assets/images/"""
import os
import io
import PyPDF2

PDF_PATH = "/root/.claude/uploads/314c63fb-5b64-4357-883d-73508e318406/1f0b7512-Zabbo_deck_19_May_2026.pdf"
OUT_DIR = "assets/images"
os.makedirs(OUT_DIR, exist_ok=True)

def extract_images():
    with open(PDF_PATH, "rb") as f:
        reader = PyPDF2.PdfReader(f)
        count = 0
        for page_num, page in enumerate(reader.pages):
            resources = page.get("/Resources", {})
            if not resources:
                continue
            xobjects = resources.get("/XObject", {})
            if not xobjects:
                continue
            for key in xobjects:
                obj = xobjects[key]
                if hasattr(obj, "get_object"):
                    obj = obj.get_object()
                subtype = obj.get("/Subtype")
                if subtype != "/Image":
                    continue
                width = obj.get("/Width", 0)
                height = obj.get("/Height", 0)
                filter_type = obj.get("/Filter")
                data = obj.get_data() if hasattr(obj, "get_data") else obj._data

                ext = "jpg"
                if filter_type == "/FlateDecode":
                    ext = "png"
                    color_space = obj.get("/ColorSpace", "")
                    bits = obj.get("/BitsPerComponent", 8)
                    # write raw png-like data — save as bin and note dimensions
                    fname = f"{OUT_DIR}/page{page_num+1}_{key[1:]}_raw_{width}x{height}.bin"
                    with open(fname, "wb") as out:
                        out.write(data)
                    print(f"  Saved raw: {fname}")
                    count += 1
                    continue
                elif filter_type == "/DCTDecode":
                    ext = "jpg"
                elif filter_type == "/JPXDecode":
                    ext = "jp2"

                fname = f"{OUT_DIR}/page{page_num+1}_{key[1:]}.{ext}"
                with open(fname, "wb") as out:
                    out.write(data)
                print(f"  Saved: {fname} ({width}x{height})")
                count += 1

    print(f"\nTotal images extracted: {count}")

if __name__ == "__main__":
    extract_images()
