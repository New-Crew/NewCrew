const db = require('../models/modelSetup.js');
const jwt = require('jsonwebtoken');

// If running this app for the first time, need to create an app-env file and export a secret
// e.g. export secret="secret"
// const secret = process.env.secret;

const secret = "natattack-dubalol-skinnyboiXD-chelseyeslehc";

const authController = {};

authController.userSignup = (req, res, next) => {
  const { password, email, admin } = req.body;
  const queryStatement = 'INSERT INTO users (password, email, admin) VALUES ($1, $2, $3);';
  db.query(queryStatement, [password, email, admin], (err) => {
    // if email 
    if (err) {
      console.log(err);
      return next(err);
    }
    return next();
  });
}

authController.getUserData = (req, res, next) => {
  const { password, email } = req.body;
  const queryStatement = 'SELECT * FROM users WHERE password = ($1) and email = ($2);';
  db.query(queryStatement, [password, email], (err, response) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!response.rows.includes(response.rows[0])) {
      return res.send('Incorrect email or password');
    };
    res.locals.userData = response.rows
    return next();
  });
}

authController.getAllUsers = (req, res, next) => {

}

// jwt logic here!
authController.createJWT = (req, res, next) => {
  const { email } = req.body;
  const userObj = {
    user: email,
    authenticated: true,
  }
  const token = jwt.sign(userObj, secret);
  res.cookie('token', token);
  return next();
}

authController.verifyJWT = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.log('ERROR: ', err);
      return next(err);
    }
    return next (decoded);
  })
}

module.exports = authController;