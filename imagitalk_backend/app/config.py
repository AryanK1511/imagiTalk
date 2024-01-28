import os

class Config:
    # ===== POSTGRES DB CONFIG =====
    POSTGRES_DB_USERNAME=os.environ.get('POSTGRES_DB_USERNAME') or None
    POSTGRES_DB_PASSWORD=os.environ.get('POSTGRES_DB_PASSWORD') or None
    SQLALCHEMY_DATABASE_URI = f'postgresql://{POSTGRES_DB_USERNAME}:{POSTGRES_DB_PASSWORD}@kashin.db.elephantsql.com/cpvcyipo'

    # ===== GOOGLE CLOUD STORAGE CONFIG =====
    GOOGLE_APPLICATION_CREDENTIALS = os.environ.get('GOOGLE_APPLICATION_CREDENTIALS') or None

    # ===== ELEVENLABS API CONFIG =====
    E_LABS_API_KEY = os.environ.get('E_LABS_API_KEY') or None
