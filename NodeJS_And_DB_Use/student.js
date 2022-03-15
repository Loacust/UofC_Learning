const Sequelize = require('sequelize');
const config = require ('./configuration/config');

const student = config.define('student',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    section: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gpq: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    nationality: {
        type: Sequelize.STRING,
        allowNull: false
    }
 }, {timestamps:false});

module.exports = student;