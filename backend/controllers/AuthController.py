from hashlib import new
from flask import request, jsonify, request
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user
from app import db

from models.User import User


def login():
    email = request.json['email']
    password = request.json['password']
    
    user = User.query.filter_by(email=email).first()
    
    if not user or not check_password_hash(user.password, password):
        return jsonify({'error':'login error check email or password'})
    
    login_user(user)
    
    return jsonify({'user':user.name})


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