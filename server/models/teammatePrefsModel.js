const db = require('./modelSetup.js');

const teammatePrefsModelQuery =
`CREATE TABLE IF NOT EXISTS teammateprefs (
   _id serial PRIMARY KEY,
   user_id INTEGER NOT NULL,
   FOREIGN KEY (user_id) REFERENCES users (_id),
   user_preference_id INTEGER NOT NULL,
   FOREIGN KEY (user_preference_id) REFERENCES users (_id),
   work_preference INTEGER NOT NULL
)`;

db.query(teammatePrefsModelQuery, [], err => {
  console.log(err);
  return err;
});
