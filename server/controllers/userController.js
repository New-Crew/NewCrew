const db = require('../models/modelSetup.js');

const userController = {};

userController.addUser = (req, res, next) => {
  // comma-separated string of emails sent in the request from the frontend
  const { csv } = req.body;
  console.log("csv: ", csv)
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
  const { _id } = req.body;
  let queryString = 'DELETE FROM users WHERE _id=($1);';
  db.query(queryString, [_id], (err, response) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.allUsers = response.rows;
    return next();
  })
};

userController.postPrefs = (req, res, next) => {
  const { user_id, skill_level, stack } = req.body;
  let queryString = 'INSERT INTO userprefs (user_id, skill_level, stack) VALUES ($1,$2,$3)';
  db.query(queryString, [user_id, skill_level, stack], (err, response) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return next();
  })
};

userController.teammatePrefs = (req, res, next) => {
  const { user_id, teammatePrefs } = req.body;
  let queryString = 'INSERT INTO teammateprefs (user_id, user_preference_id, work_preference) VALUES ';
  for (let props in teammatePrefs) {
    queryString = queryString.concat(`(${user_id}, ${props}, ${teammatePrefs[props]}), `)
  }
  queryString = queryString.slice(0, (queryString.length - 2)).concat(';');
  db.query(queryString, [], (err, response) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return next();
  })
}

module.exports = userController;