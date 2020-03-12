const db = require('../models/modelSetup.js');

const authController = {};

authController.userSignup = (req, res, next) => {
  const { password, email, admin } = req.body;
  const queryStatement = 'INSERT INTO users (password, email, admin) VALUES ($1, $2, $3);';
  db.query(queryStatement, [password, email, admin], (err) => {
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
      // return res.send('Incorrect email or password');
      //changed this to allow for the front end to check the length of the response 
      res.locals.userData = response.rows
    };
    res.locals.userData = response.rows
    return next();
  });
}

// jwt logic here!

module.exports = authController;