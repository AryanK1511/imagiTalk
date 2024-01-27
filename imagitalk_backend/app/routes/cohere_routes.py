from app import app
import cohere
import os
from dotenv import load_dotenv
from flask import request, jsonify
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

# Configure environment variables
load_dotenv()

cohere_key = os.getenv("COHERE_KEY")
print("Key: ", cohere_key)
co = cohere.Client(cohere_key)

# ========== API ROUTE TO GET COHERE TEXT GENERATION (BETA) ==========
@app.route('/api/cohere/generate', methods=['POST'])
def generate_text():
    user_prompt = request.json

    # Generate text using cohere API
    response = co.generate(prompt=user_prompt["data"])

    generated_text = response.generations[0].text

    # Return the generated text in a JSON-serializable format
    return jsonify({"result": generated_text})

