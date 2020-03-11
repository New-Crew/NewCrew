// ALGO LOGIC! WHOO!

// base case: if form is not filled out

// user high priority: both put each other as 1

// weighting:
// .5x

// we must have a balanced team based on tech stack
  // ex: 4 people, 2 FE, 2 BE are broken up
// we must have balanced team based on skill level
  // ex: 4 people, a 2 and an 8 paired, and a 3 and a 5 paired
// we must have teams of people that want to work most together
  // ex: 4 people. no one gives top/bottom preferences, then random
    // 2 people top pick each other, & two others w/ each other, then matched
    // 

const db = require('../models/modelSetup.js');

groupController = {};

groupController.generateGroups = (req, res, next) => {
  const { groupSize } = req.body;
  queryString = 'INSERT INTO groups (group_number, user_id) VALUES ';
  const users = res.locals.allUsers;
  let userStorage = [];
  let groupArrayFinal = [];
  while (users.length > 0) {
    const randomUserNum = Math.floor(Math.random() * users.length);
    userStorage.push(users[randomUserNum]);
    if (userStorage.length === groupSize) {
      groupArrayFinal.push(userStorage);
      userStorage = [];
    };
    users.splice(randomUserNum, 1);
  };

  for (let i = 0; i  < groupArrayFinal.length; i += 1) {
    for (let k = 0; k < groupArrayFinal[i].length; k += 1) {
      queryString = queryString.concat(`(${i + 1}, ${groupArrayFinal[i][k]._id}), `);
    }
  }
  queryString = queryString.slice(0, (queryString.length - 2)).concat(';');
  db.query(queryString, [], (err, response) => {
    if (err) {
      console.log('error in final query');
      console.log(err);
      return next(err);
    }
    console.log('successfully inserted groups into');
    return next();
  });
}

module.exports = groupController;
