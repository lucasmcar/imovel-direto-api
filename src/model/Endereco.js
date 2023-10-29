const Sequelize = require('sequelize');

const con = require('../../config/database/database');
const Cliente = require('./Cliente')
const Endereco = con.define('tb_endereco', {
    logradouro: {
        type: Sequelize.STRING,
        allowNull : false,
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bairro:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade :{
        type: Sequelize.STRING,

    }
},  {freezeTableName: true});

Endereco.belongsTo(Cliente);
//Endereco.sync({force: true}).then(result => console.log(result)).catch(err => console.log(err));;

module.exports = Endereco;