import datetime

from extensions import db
from models.User import User

class Chore(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    chore = db.Column(db.Text())
    done = db.Column(db.Boolean, default=False)
    date = db.Column(db.DateTime, default = datetime.datetime.now)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    def __init__(self, chore, done):
        self.chore = chore
        
    def serialize(self):
        return{
            'id': self.id,
            'chore': self.chore,
            'done': self.done,
            'date': self.date,
            'user_id': self.user_id
        }
