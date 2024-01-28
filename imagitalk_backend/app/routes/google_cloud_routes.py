from flask import request, jsonify, make_response
from app import app, db
import json
import os
from urllib.parse import quote_plus, urlencode
from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask, redirect, render_template, session, url_for
from app.models.user import User
from app.models.character import Character
import requests  # You might need to install this package if making direct HTTP requests
from flask_cors import CORS, cross_origin
from google.cloud import storage
import uuid

# Locating and using env vars
ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

# Configure Google Cloud Storage
GCS_BUCKET_NAME = 'imagitalkaudiostore'

def upload_to_gcs(file_content, file_name):
    unique_file_name = f"{uuid.uuid4()}_{file_name}"
    try:
        client = storage.Client()
        bucket = client.bucket(GCS_BUCKET_NAME)
        blob = bucket.blob(unique_file_name)

        blob.upload_from_string(file_content, content_type='audio/mpeg')

        public_url = f"https://storage.googleapis.com/{GCS_BUCKET_NAME}/{quote_plus(unique_file_name)}"
        return public_url
    except Exception as e:
        print(f"Error uploading to GCS: {e}")
        return None

@app.route('/api/make-it-speak', methods=['POST'])
def make_it_speak():
    data = request.json
    text = data['text']
    voice_id = data['voice_id']
    print(voice_id)

    # Set up ElevenLabs API parameters
    eleven_labs_api_url = f'https://api.elevenlabs.io/v1/text-to-speech/{voice_id}' 
    api_key = os.environ.get('E_LABS_API_KEY')

    # Send request to ElevenLabs API
    response = requests.post(eleven_labs_api_url, json={
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings":{"similarity_boost":0.5,"stability":0.5}
    }, headers= {
    'xi-api-key': f'{api_key}',
    'Content-Type': 'application/json'
  })

    if response.status_code == 200:
        audio_content = response.content  
        file_name = 'character_audio.mp3'  
        public_url = upload_to_gcs(audio_content, file_name)

        return jsonify({'audioUrl': public_url})
    else:
        return jsonify({'error': 'Failed to generate speech'}), 500

