from flask import Flask, request, jsonify
from flask_cors import CORS  

from maldetect_url import get_predictions_from_urls

app = Flask(__name__)
CORS(app)  

@app.route('/check_url', methods=['POST'])
def check_url():
    json_data = request.json  
    results = get_predictions_from_urls(json_data)  
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
