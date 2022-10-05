from flask import render_template, redirect, url_for, request, abort, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy

from controllers.ChoreController import getAll, addChore, updateChore,  updateDone, deleteChore
db = SQLAlchemy()

from models.Chore import Chore

chore_bp = Blueprint('chore_bp', __name__)

chore_bp('chore/get', methods=['GET'])(getAll)
# chore_bp('/add', methods=['POST'])(addChore)
# chore_bp('/update/<int:id>', methods=['PUT'])(updateChore)
# chore_bp('/updatedone/<int:id>', methods=['PUT'])(updateDone)
# chore_bp('/delete/<int:id>', methods=['DELETE'])(deleteChore)