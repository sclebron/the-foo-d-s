const Sequelize = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(
      // process.env.DB_NAME,
      // process.env.DB_USER,
      // process.env.DB_PASSWORD,
      'foo_ds_db',
      'root',
      'password',
      {
        host: "localhost",
        dialect: "mysql",
        port: 3000,
      }
);

module.exports = sequelize;
