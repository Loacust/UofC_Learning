const Sequelize = require('sequelize');
const sequelize = new Sequelize("studentdata", "root", "password22669", {dialect: 'mysql'});

module.exports = sequelize;
