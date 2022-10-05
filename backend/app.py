from flask import Flask , jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='../frontend/build')
CORS(app)


if __name__ == '__main__':
    app.run(debug=True)


app.config['SQLALCHEMY_DATABASE_URI']="postgresql://postgres:Husky63!!@localhost/flask_todo"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Chore(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    chore = db.Column(db.Text())
    done = db.Column(db.Boolean, default=False)
    date = db.Column(db.DateTime, default = datetime.datetime.now)
    
    def __init__(self, chore, done):
        self.chore = chore
    
class ChoreSchema(ma.Schema):
    class Meta:
        feilds = ('id','title','body','date')

chore_schema = ChoreSchema()
chores_schema = ChoreSchema(many=True)

@app.route('/get', methods = ['GET'])
def index():
    allChore = Chore.query.all()
    return formatAllChores(allChore)

@app.route('/get/<id>/', methods = ['GET'])
def getOne(id):
    getChore = Chore.query.get(id)
    return formatChore(getChore)

@app.route('/add', methods = ['POST'])
def add_chore():
    chore = request.json['chore']
    done = False
    newChore = Chore(chore,done)
    db.session.add(newChore)
    db.session.commit()
    return formatChore(newChore)

@app.route('/update/<id>/', methods = ['PUT'])
def update_chore(id):
    chore = Chore.query.get(id)
    uChore = request.json['chore']
    done = request.json['done']
    chore.chore = uChore
    chore.done = done
    
    db.session.commit()
    
    return formatChore(chore)

@app.route('/delete/<id>/', methods = ['DELETE'])
def delete_chore(id):
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