from flask import render_template, redirect, url_for, request, abort, jsonify, Blueprint

from controllers.AuthController import login, signup, logout


auth_bp = Blueprint('auth_bp', __name__)

auth_bp.route('/login', methods=['POST'])(login)
auth_bp.route('/signup', methods=['POST'])(signup)
auth_bp.route('/logout', methods=['GET'])(logout)