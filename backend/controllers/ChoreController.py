from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from app import db

from models.Chore import Chore
from models.User import User


@jwt_required()
def getAll(id):
    user = User.query.get(id)
    chores = user.chores
    newC = []
    for c in chores:
        c = c.serialize()
        newC.append(c)
    def getId(c):
        return c.get('id')
    newC.sort(key=getId)
    return jsonify(newC)

@jwt_required()
def addChore(id):
    chore = request.json['chore']
    done = False
    newChore = Chore(chore,done)
    newChore.user_id = id
    db.session.add(newChore)
    db.session.commit()
    newChore = newChore.serialize()
    print(newChore)
    return newChore

@jwt_required()
def updateChore(id):
    chore = Chore.query.get(id)
    uChore = request.json['chore']
    chore.chore = uChore
    db.session.commit()
    return formatChore(chore)

@jwt_required()
def updateDone(id):
    chore = Chore.query.get(id)
    if chore.done:
        chore.done = False
    else:
        chore.done = True
    db.session.commit()
    print(chore.done)
    return formatChore(chore)

@jwt_required()
def deleteChore(id):
    chore = Chore.query.get(id)
    if chore:
        db.session.delete(chore)
        db.session.commit()
        return jsonify({'action':'delte successful'})
    else:
        return jsonify({'action':'delte unsuccessful'})

def formatAllChores(chores):
    res=[]
    for chore in chores:
        res.append({'id':chore.id,'chore':chore.chore,'done':chore.done,'date':chore.date})
    return jsonify(res)
        
def formatChore(chore):
    return jsonify({'id':chore.id,'chore':chore.chore,'done':chore.done,'date':chore.date})