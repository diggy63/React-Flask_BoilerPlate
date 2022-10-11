from flask import request, jsonify

from models.Chore import db


def login():
    return jsonify({'login':'page'})


def signup():
    return jsonify({'signup':'page'})

def logout():
    return jsonify({'action':'logout'})