const {DataTypes} = require('sequelize')

const db = require('../bd/conection')

const User =db.define('User',{
    name: {
        type:DataTypes.STRING,
        alloWNull: false
    },
    occupation: {
        type:DataTypes.STRING,
        required: true
    },
    newletter: {
        type: DataTypes.BOOLEAN,
    },
})

module.exports =  User