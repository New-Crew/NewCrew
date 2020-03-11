const db = require('./modelSetup.js');

const userPrefsModelQuery =
`CREATE TABLE IF NOT EXISTS userprefs (
   _id serial PRIMARY KEY,
   user_id INTEGER,
   FOREIGN KEY (user_id) REFERENCES users (_id),
   skill_level INTEGER NOT NULL,
   stack VARCHAR NOT NULL
)`;

db.query(userPrefsModelQuery, [], err => {
  console.log(err);
  return err;
});
