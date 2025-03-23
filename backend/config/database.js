const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'ecodeli',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'rootpassword',
  {
    host: process.env.DB_HOST || 'mysql',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false
  }
);

module.exports = sequelize;



