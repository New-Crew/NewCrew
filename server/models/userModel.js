const db = require('./modelSetup.js');

const userModelQuery =
`CREATE TABLE IF NOT EXISTS users (
   _id serial PRIMARY KEY,
   email VARCHAR unique NOT NULL,
   admin BOOLEAN NOT NULL,
   password VARCHAR NOT NULL,
   first_name VARCHAR,
   last_name VARCHAR,
   phone INTEGER
)`;

db.query(userModelQuery, [], err => {
  console.log(err);
  return err;
});
