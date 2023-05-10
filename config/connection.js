const Sequelize = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  dialect: "mysql",
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
});

// const sequelize = new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PASSWORD,
//       {
//         host: "127.0.0.1",
//         dialect: "mysql",
//         port: 3306,
//       }
// );

module.exports = sequelize;
