const Sequelize = require('sequelize');
const config = require('../config/db');
const GiftCode = require('./models/GiftCode');

const sequelize = new Sequelize(config.MYSQL_DATABASE, config.MYSQL_USER, config.MYSQL_PASSWORD, {
  host: config.MYSQL_HOST,
  dialect: 'mysql'
});

const db = {
  sequelize,
  Sequelize,
  GiftCode,
};

module.exports = db;
