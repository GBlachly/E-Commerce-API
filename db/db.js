const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecomm-api',
  password: 'postgres',
  port: 5432,
});

module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
  };
  