from flask import request, jsonify, request
from werkzeug.security import generate_password_hash, check_password_hash
from app import db
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager

from models.User import User


def login():
    email = request.json['email']
    password = request.json['password']
    
    user = User.query.filter_by(email=email).first()
    
    if not user or not check_password_hash(user.password, password):
        print('not auth')
        return jsonify({'error':'login error check email or password'})

    access_token = create_access_token(identity=user.name)
    response = {"access_token":access_token}
    return response


def signup():
    email = request.json['email']
    name = request.json['name']
    password = request.json['password']
    
    user = User.query.filter_by(email=email).first()
    
    if user:
        return jsonify({"error":'email already taken'})
    
    new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"new_user":"created"})

def logout():
    return jsonify({'action':'logout'})