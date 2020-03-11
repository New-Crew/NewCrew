const db = require('./modelSetup.js');

const groupModelQuery =
`CREATE TABLE IF NOT EXISTS groups (
   _id serial PRIMARY KEY,
   user_id INTEGER NOT NULL,
   FOREIGN KEY (user_id) REFERENCES users (_id) NOT NULL,
   group_number INTEGER NOT NULL
)`;

db.query(groupModelQuery, [], err => {
  console.log(err);
  return err;
});
