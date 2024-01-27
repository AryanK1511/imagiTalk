from app import app
import cohere
import os
from dotenv import load_dotenv
from flask import request, jsonify
from flask import request, jsonify, make_response
from app import app, db
import json

# Configure environment variables
load_dotenv()

# Configure cohere API
cohere_key = os.getenv("COHERE_KEY")
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

