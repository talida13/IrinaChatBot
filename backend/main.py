from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ClassifyRequest(BaseModel):
    text: str

@app.post("/classify")
def classify(req: ClassifyRequest):
    text = req.text.lower()

    if "level" in text or "b1" in text or "b2" in text:
        return {"intent": "level_help", "confidence": 0.95}
    if "need" in text or "help" in text or "assist" in text:
        return {"intent": "need_and_purpose", "confidence": 0.95}
    if "register" in text or "document" in text:
        return {"intent": "registration_help", "confidence": 0.95}
    if "pay" in text or "fee" in text:
        return {"intent": "payment_help", "confidence": 0.95}
    if "form" in text or "cnp" in text or "romanian" in text:
        return {"intent": "form_translation", "confidence": 0.95}
    if "contact" in text or "email" in text or "phone" in text:
        return {"intent": "official_contact", "confidence": 0.95}

    return {"intent": "fallback", "confidence": 0.2}


    # uvicorn main:app --reload
