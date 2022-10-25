const postControllers = require('./posts.controller')

const getAllPosts = (req, res) => {

    //* PAGINACION
    //? localhost:9000/api/v1/posts?offset=0&limit=10&name=juan$rkq=tio
    //? localhost:9000/api/v1/posts?offset=0&limit=10
    // const { offset, limit, name, rkq } = req.query

    const { offset, limit } = req.query
    //? offset: donde inicia
    //? limit: donde termina


    postControllers.getAllPosts( offset, limit)
        .then(data => {
            res.status(200).json({
                offset,
                limit,
                results: data
            })
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getPostById = (req, res) => {
    const id = req.params.id;
  
    postControllers.getPostById(id)
      .then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json({ message: "Invalid ID" });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  };

const createPost = (req, res) => {
    //? Este es el id del usuario loggeado
    const userId = req.user.id 
    const { title, content, categoryId } = req.body
    if(title && content && categoryId){
        postControllers.createPost({title, content, userId, categoryId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: 'string',
                content: 'string',
                categoryId: 'uuid'
            }
        })
    }
}

const getPostsByCategory = (req, res) => {

    const categoryId = req.params.id 
    
    postControllers.getPostsByCategory(categoryId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


module.exports = {
    createPost,
    getPostById,
    getAllPosts,
    getPostsByCategory
}