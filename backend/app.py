from flask import Flask , jsonify, request, send_from_directory
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()


from models.Chore import db
from routes.chore_bp import chore_bp

app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
CORS(app)
app.config.from_object('config')

db.init_app(app)
migrate = Migrate(app,db)

app.register_blueprint(chore_bp, url_prefix='/chore')

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True) 