from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, PlainTextResponse
import requests
import shutil
import os
import logging
import base64

app = FastAPI()

# CORS ayarları (frontend'den erişim için)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging ayarları
LOG_FILE = "app.log"
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

def get_ollama_description(image_path, ollama_url, ollama_model, user_hint):
    with open(image_path, "rb") as img_file:
        img_bytes = img_file.read()
        img_b64 = base64.b64encode(img_bytes).decode("utf-8")
    prompt = "Bu görselde ne görüyorsun? Kısa ve net bir şekilde Türkçe açıkla."
    if user_hint:
        prompt += f" ({user_hint})"
    payload = {
        "model": ollama_model,
        "messages": [
            {
                "role": "user",
                "content": prompt,
                "images": [img_b64]
            }
        ],
        "stream": False
    }
    try:
        response = requests.post(ollama_url, json=payload)
        logger.info(f"Ollama API'ye istek atıldı: {ollama_url} | Model: {ollama_model} | Status: {response.status_code}")
        if response.status_code == 200:
            result = response.json()
            # Yanıt yapısı: {'message': {'content': ...}}
            content = result.get("message", {}).get("content", "Açıklama alınamadı.")
            logger.info(f"Ollama yanıtı: {content}")
            return content
        else:
            logger.error(f"Ollama API hatası: {response.status_code} | {response.text}")
            return f"Ollama API hatası: {response.status_code}"
    except Exception as e:
        logger.error(f"Ollama API bağlantı hatası: {e}")
        return "Ollama API bağlantı hatası."

@app.post("/describe")
async def describe_image(
    file: UploadFile = File(...),
    ollama_url: str = Form("http://localhost:11434/api/chat"),
    ollama_model: str = Form("llava"),
    user_hint: str = Form("")
):
    temp_path = f"temp_{file.filename}"
    with open(temp_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    try:
        logger.info(f"Görsel alındı: {file.filename}")
        description = get_ollama_description(temp_path, ollama_url, ollama_model, user_hint)
    finally:
        os.remove(temp_path)
    return JSONResponse(content={"description": description})

@app.get("/logs")
def get_logs():
    if not os.path.exists(LOG_FILE):
        return PlainTextResponse("Log dosyası yok.")
    with open(LOG_FILE, "r", encoding="utf-8") as f:
        return PlainTextResponse(f.read()) 