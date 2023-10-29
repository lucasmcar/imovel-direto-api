const Sequelize = require('sequelize');

const con = new Sequelize('rentjlleapp_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = con;