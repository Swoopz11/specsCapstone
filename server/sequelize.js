const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
  "postgres://hganwissmxorno:3c5d4e06231cbdd00d1cfa66d78731f0f88d86074858c1e9245681558437b4e5@ec2-3-224-184-9.compute-1.amazonaws.com:5432/d6bm6d2kp82qn4",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize