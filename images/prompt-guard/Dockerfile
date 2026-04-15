FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Download Meta's model and convert to ONNX at build time
RUN python -c "from optimum.onnxruntime import ORTModelForSequenceClassification; from transformers import AutoTokenizer; AutoTokenizer.from_pretrained('meta-llama/Llama-Prompt-Guard-2-22M'); ORTModelForSequenceClassification.from_pretrained('meta-llama/Llama-Prompt-Guard-2-22M', export=True)"

COPY app.py .

EXPOSE 8090

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8090"]
