from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__, static_folder="frontend/build/static", template_folder="frontend/build")

# Enable CORS for all routes
CORS(app)

@app.route("/")
def home():
    return "Welcome to the Fake News Detection API!"

@app.route("/predict", methods=["POST"])
def predict():
    # Here you'd process the input and make a prediction
    data = request.get_json()
    headline = data.get("headline", "")
    prediction = "Fake News" if "fake" in headline.lower() else "Real News"
    
    return jsonify({"prediction": prediction})

if __name__ == "__main__":
    app.run(debug=True)
