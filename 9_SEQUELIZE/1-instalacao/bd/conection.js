const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nodesequelize2', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Concectamos com sucesso com o Sequelize')

}catch(err){
    console.log('Não foi possivel concectar: ', err)
}

module.exports = sequelize