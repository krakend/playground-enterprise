from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from optimum.onnxruntime import ORTModelForSequenceClassification
from transformers import AutoTokenizer
import numpy as np

app = FastAPI()

# Non-gated community mirror of meta-llama/Llama-Prompt-Guard-2-22M.
# Same DeBERTa-xsmall backbone. The mirror ships without an id2label map
# in config.json, so we hardcode the upstream order:
#   index 0 = BENIGN (safe), index 1 = MALICIOUS (injection / jailbreak)
MODEL_ID = "hipocap/Llama-Prompt-Guard-2-22M"
LABELS = ["BENIGN", "MALICIOUS"]

tokenizer = None
model = None


@app.on_event("startup")
def load_model():
    global tokenizer, model
    tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
    model = ORTModelForSequenceClassification.from_pretrained(MODEL_ID, export=True)


class ClassifyRequest(BaseModel):
    text: str = None
    contents: str = None


class ClassifyResponse(BaseModel):
    label: str
    score: float
    contents: str


@app.post("/classify", response_model=ClassifyResponse)
def classify(req: ClassifyRequest):
    prompt = req.text or req.contents
    if not prompt or not prompt.strip():
        raise HTTPException(status_code=400, detail="Empty text")

    inputs = tokenizer(prompt, return_tensors="np", truncation=True, max_length=512)
    outputs = model(**inputs)
    logits = outputs.logits[0]

    probabilities = np.exp(logits) / np.sum(np.exp(logits))
    predicted_idx = int(np.argmax(probabilities))

    return ClassifyResponse(
        label=LABELS[predicted_idx],
        score=float(probabilities[predicted_idx]),
        contents=prompt,
    )


@app.get("/health")
def health():
    return {"status": "ok"}
