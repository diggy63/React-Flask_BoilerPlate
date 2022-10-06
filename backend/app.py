from flask import Flask , jsonify, request
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()


from models.Chore import db
from routes.chore_bp import chore_bp

app = Flask(__name__)
CORS(app)
app.config.from_object('config')

db.init_app(app)
migrate = Migrate(app,db)

app.register_blueprint(chore_bp, url_prefix='/chore')


if __name__ == '__main__':
    app.run(debug=True)


# app.config['SQLALCHEMY_DATABASE_URI']="postgresql://postgres:Husky63!!@localhost/flask_todo"
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# class Chore(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     chore = db.Column(db.Text())
#     done = db.Column(db.Boolean, default=False)
#     date = db.Column(db.DateTime, default = datetime.datetime.now)
    
#     def __init__(self, chore, done):
#         self.chore = chore

# @app.route('/get', methods = ['GET'])
# def index():
#     allChore = Chore.query.order_by(Chore.id).all()
#     return formatAllChores(allChore)

# @app.route('/get/<id>/', methods = ['GET'])
# def getOne(id):
#     getChore = Chore.query.get(id)
#     return formatChore(getChore)

# @app.route('/add', methods = ['POST'])
# def add_chore():
#     print(request)
#     chore = request.json['chore']
#     done = False
#     newChore = Chore(chore,done)
#     db.session.add(newChore)
#     db.session.commit()
#     return formatChore(newChore)

# @app.route('/update/<id>/', methods = ['PUT'])
# def update_chore(id):
#     chore = Chore.query.get(id)
#     uChore = request.json['chore']
#     print(uChore)
#     chore.chore = uChore
#     db.session.commit()
#     return formatChore(chore)

# @app.route('/updatedone/<id>/', methods = ['PUT'])
# def update_done(id):
#     chore = Chore.query.get(id)
#     print(chore)
#     if chore.done:
#         chore.done = False
#     else:
#         chore.done = True
#     db.session.commit()
#     return formatChore(chore)

# @app.route('/delete/<id>/', methods = ['DELETE'])
# def delete_chore(id):
#     chore = Chore.query.get(id)
#     if chore:
#         db.session.delete(chore)
#         db.session.commit()
#         return jsonify({'action':'delte successful'})
#     else:
#         return jsonify({'action':'delte unsuccessful'})

# def formatAllChores(chores):
#     res=[]
#     for chore in chores:
#         res.append({'id':chore.id,'chore':chore.chore,'done':chore.done,'date':chore.date})
#     return jsonify(res)
        
# def formatChore(chore):
#     return jsonify({'id':chore.id,'chore':chore.chore,'done':chore.done,'date':chore.date})