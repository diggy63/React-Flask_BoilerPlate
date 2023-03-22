from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import request

from extensions import db

from models.Chore import User

@jwt_required()
def getUser():
    current_user = get_jwt_identity()
    user = User.query.get(current_user)
    user = user.serialize()
    return jsonify(user)
