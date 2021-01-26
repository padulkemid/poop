require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_DEV,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
  },
  test: {
    client: 'pg',
    connection: {
      database: process.env.DB_TEST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
  },
};
