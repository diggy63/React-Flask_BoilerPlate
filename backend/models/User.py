from flask_login import UserMixin


from extensions import db

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))
    chores = db.relationship("Chore", backref='user')
    
    def serialize(self):
        return{
            'id': self.id,
            'email': self.email,
            'name': self.name,
        }
