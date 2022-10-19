const Users = require('./users.models')
const Posts = require('./posts.models')
const Categories = require('./categories.models')

const initModels = () => {

    //* Relacion de 1 a muchos
    //? Una Publicacion, pertenece a un Usuario
    Posts.belongsTo(Users)
    //? Un usuario tiene muchas Publicaciones
    Users.hasMany(Posts)

    //* Relacion de 1 a muchos
    //? Una Publicación, pertenece a una Categoria
    Posts.belongsTo(Categories)
    //? Una Categoria, tiene muchas Publicaciones
    Categories.hasMany(Posts)
    
}


module.exports = initModels
