from flask import render_template, redirect, url_for, request, abort, jsonify, Blueprint

from controllers.ChoreController import getAll, addChore, updateChore,  updateDone, deleteChore

from models.Chore import Chore

chore_bp = Blueprint('chore_bp', __name__)

chore_bp.route('/delete/<int:id>', methods=['DELETE'])(deleteChore)
chore_bp.route('/get/<int:id>', methods=['GET'])(getAll)
chore_bp.route('/add/<int:id>', methods=['POST'])(addChore)
chore_bp.route('/update/<int:id>', methods=['PUT'])(updateChore)
chore_bp.route('/updatedone/<int:id>', methods=['PUT'])(updateDone)
