const Sequelize = require('sequelize');
const GiftCode = require('./GiftCode');

const sequelize = new Sequelize('jsinpipeline', 'jsinpipeline', 'mypassword123', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {
  sequelize,
  Sequelize,
  GiftCode,
};

module.exports = db;
