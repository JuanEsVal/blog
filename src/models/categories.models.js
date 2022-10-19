const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false    
    }
}, { timestamps: false } )   //Aqui no se agrega las columnas createDate ni updateDate

module.exports = Categories