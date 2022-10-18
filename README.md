# React-Flask BoilerPlate

This is a simple Todolist made with the create-react-app and flask using PostgreSQL for a db

## Getting started
In the Frontend folder all you need to do is NPM install and that will install all the dependecies. You will also need to create a .env with
REACT_APP_BASE_URL="http://localhost:5000"
unless you change the port which flask is listening to.

In the backend folder you will need to install all the requirement.txt dependecies. After you need to create a .env with the following KEYS and VALUES
FLASK_APP=app.py
FLASK_DEBUG=1
DB_HOST={this will have your DB name for SQLALCHEMY}
SECRET_KEY={secret key for password encryptions}
JWT={secret key for JWT incryption.}


### Login and Authentication

This app is using jwt-exteneded for flask. The frontend will check for the token upon login if you want to add more pages on the front end you will always have the users info stored in state after login. As soon as the token expeires in the backend the user will be logged out.

### Backend MVC

The point of this project for me was to create a flask boilerplate with MVC file structure. This is done by using Blueprint to route all our api calls to a routes folder which then calls all our function in the controllers folder.

### Models and migration

If you need to change or add models I am using Flask-migrate to do so. the documentation is located at https://flask-migrate.readthedocs.io/en/latest/.


