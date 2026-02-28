# 使用輕量級 Python 3.10-slim 映像檔
FROM python:3.10-slim

# 設定工作目錄
WORKDIR /app

# 安裝編譯所需的系統依賴 (如果需要的話)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# 複製依賴清單並安裝
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 複製其餘的專案檔案
COPY . .

# 設定環境變數預設值 (建議在執行時透過環境變數注入真實金鑰)
ENV PORT=8080

# 暴露應用程式埠
EXPOSE 8080

# 啟動應用程式 (使用 gunicorn 或直接執行 python)
# 建議使用 gunicorn 以提高穩定性
# CMD ["gunicorn", "--bind", ":8080", "--workers", "1", "--threads", "8", "--timeout", "0", "main:app"]
CMD ["python", "main.py"]
