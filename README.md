![image](https://github.com/user-attachments/assets/15c90766-fea9-4321-a87b-0713430a4a30)

# Webcam Görüntü Açıklama Uygulaması

## Gereksinimler
- Python 3.8+
- Node.js 16+
- Ollama (Lokal olarak çalışmalı, ör: LLaVA modeli)

## Kurulum ve Çalıştırma

### Backend
1. Terminalde backend klasörüne girin:
   ```
   cd backend
   .\venv\Scripts\activate  # Windows
   pip install -r requirements.txt
   uvicorn app:app --reload
   ```
2. Ollama'nın local API'si çalışıyor olmalı ve uygun bir vision-language model (ör: llava) yüklü olmalı.

### Frontend
1. Yeni bir terminal açın ve frontend klasörüne girin:
   ```
   cd frontend
   npm install
   npm start
   ```
2. Tarayıcıda `http://localhost:3000` adresine gidin.

## Açıklama
- Uygulama, webcam görüntüsünü alır ve belirli aralıklarla backend'e gönderir.
- Backend, Ollama'nın local API'sine görseli gönderir ve açıklamayı frontend'e iletir.
- Açıklama ekranda anlık olarak gösterilir.

## Notlar
- Ollama'nın API endpoint ve model adı backend/app.py dosyasında ayarlanabilir.
- Gizlilik için webcam görüntülerinin sadece lokal ağda işlendiğinden emin olun. 
