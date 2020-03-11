const { Pool } = require('pg');

const connectionString = 'postgres://jmdoflpf:1DlO-mxrFX8F_O7LrO5gRcylSJCH3Kd0@drona.db.elephantsql.com:5432/jmdoflpf';

const pool = new Pool({
  connectionString: connectionString,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
