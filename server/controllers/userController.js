const db = require('../models/modelSetup.js');

const userController = {};

userController.addUser = (req, res, next) => {
  // comma-separated string of emails sent in the request from the frontend
  const { csv } = req.body;
  // define query string without email/password/admin values, to later send to SQL database
  let queryString = 'INSERT INTO users (email, password, admin) VALUES ';
  // split email string & iterate
  csv.split(',').forEach(el => {
    // concat each set of email, a randomized password, and 'false' admin together onto query string
    queryString = queryString.concat('(' + `'${el}'` + `, '` + (Math.floor(Math.random() * 1000000).toString() + `', false), `));
  });
  // remove final comma & space
  queryString = queryString.slice(0, (queryString.length - 2)).concat(';');
  // send query
  db.query(queryString, [], (err, response) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return next();
  });
};

userController.getUsers = (req, res, next) => {
  const queryString = 'SELECT email, _id, first_name, last_name, phone FROM users WHERE NOT admin;'
  db.query(queryString, [], (err, response) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.allUsers = response.rows;
    return next();
  })
};

userController.deleteUser = (req, res, next) => {

};

userController.postPrefs = (req, res, next) => {

};

module.exports = userController;