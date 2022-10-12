from flask import Flask , jsonify, request, send_from_directory
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
from datetime import datetime, timedelta, timezone
import os
from dotenv import load_dotenv

load_dotenv()

db = SQLAlchemy()

from models.User import User

from routes.chore_bp import chore_bp
from routes.auth_bp import auth_bp
from routes.user_bp import user_bp

app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
CORS(app)
app.config.from_object('config')
app.config['SECRET_KEY'] = 'diggy'
app.config["JWT_SECRET_KEY"] = "JWT"
jwt = JWTManager(app)


    

db.init_app(app)


migrate = Migrate(app,db)

app.register_blueprint(chore_bp, url_prefix='/chore')
app.register_blueprint(auth_bp,url_prefix='/auth')
app.register_blueprint(user_bp,url_prefix='/user')



@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

# @app.route('/token', methods=["POST"])
# def create_token():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     if email != "test" or password != "test":
#         return {"msg": "Wrong email or password"}, 401

#     access_token = create_access_token(identity=email)
#     response = {"access_token":access_token}
#     return response

# @app.after_request
# def refresh_expiring_jwts(response):
#     try:
#         exp_timestamp = get_jwt()["exp"]
#         now = datetime.now(timezone.utc)
#         target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
#         if target_timestamp > exp_timestamp:
#             access_token = create_access_token(identity=get_jwt_identity())
#             data = response.get_json()
#             if type(data) is dict:
#                 data["access_token"] = access_token 
#                 response.data = json.dumps(data)
#         return response
#     except (RuntimeError, KeyError):
#         # Case where there is not a valid JWT. Just return the original respone
#         return response


# @app.route("/logout", methods=["POST"])
# def logout():
#     response = jsonify({"msg": "logout successful"})
#     unset_jwt_cookies(response)
#     return response


if __name__ == '__main__':
    app.run(debug=True) 