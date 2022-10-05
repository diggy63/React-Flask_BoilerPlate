import sys
from flask import render_template, redirect, url_for, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from models.Chore import Chore

def getAll():
    allChore = Chore.query.order_by(Chore.id).all()
    return formatAllChores(allChore)

def addChore():
    print(request)
    chore = request.json['chore']
    done = False
    newChore = Chore(chore,done)
    db.session.add(newChore)
    db.session.commit()
    return formatChore(newChore)

def updateChore(id):
    chore = Chore.query.get(id)
    uChore = request.json['chore']
    print(uChore)
    chore.chore = uChore
    db.session.commit()
    return formatChore(chore)

def updateDone(id):
    chore = Chore.query.get(id)
    print(chore)
    if chore.done:
        chore.done = False
    else:
        chore.done = True
    db.session.commit()
    return formatChore(chore)

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