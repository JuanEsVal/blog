const Posts = require('../models/posts.models')

const uuid = require('uuid')
const Users = require('../models/users.models')
const Categories = require('../models/categories.models')

const getAllPosts = async() => {
    const data = await Posts.findAll({  
        //  Aca escribo los Joins:
        include:[
            {
                model: Users    // Tabla Users
            },
            {
                model: Categories,      // Tabla categories
                attributes: {
                    exclude: ['id']
                }
            }
        ],
        attributes: {
            exclude: [ 'id', 'createdBy', 'createdAt', 'updatedAt', 'categoryId']
        }
    })
    return data
}

const getPostById = async(id) => {

}

const createPost = async (data) => {
    const response = await Posts.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        createdBy: data.userId, //? este es el user id que viene desde el token
        categoryId: data.categoryId
    })
    return response
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost
}

