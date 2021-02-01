const env = process.env.NODE_ENV || 'development';
const knex = require('knex');

const config = require('../knexfile')[env];

const db = knex(config);

module.exports = db;
