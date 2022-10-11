from flask import Flask , jsonify, request, send_from_directory
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_login import LoginManager
import os
from dotenv import load_dotenv

load_dotenv()


db = SQLAlchemy()

from routes.chore_bp import chore_bp
from routes.auth_bp import auth_bp

app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
CORS(app)
app.config.from_object('config')
app.config['SECRET_KEY'] = 'diggy'

db.init_app(app)


migrate = Migrate(app,db)

app.register_blueprint(chore_bp, url_prefix='/chore')
app.register_blueprint(auth_bp,url_prefix='/auth')

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True) 