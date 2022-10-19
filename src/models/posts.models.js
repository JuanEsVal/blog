const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Posts = db.define('posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false        
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false        
    },
    createBy: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'create_by'
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id'
    }
})

module.exports = Posts