from flask import render_template, redirect, url_for, request, abort, jsonify, Blueprint
from flask_jwt_extended import jwt_required

from controllers.UserController import getUser


user_bp = Blueprint('user_bp', __name__)

user_bp.route('/get', methods=['GET'])(getUser)
# @jwt_required
# def getUser():
#     # token = request.json['Authentication']
#     print('here')
#     return jsonify({'no user found':'hello'})