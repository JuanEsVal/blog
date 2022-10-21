const router = require('express').Router()
const passport = require('passport')

const postServices = require('./posts.services')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(postServices.getAllPosts)
    .post(
        passport.authenticate('jwt', {session: false}),
        postServices.createPost
    )

// route.get('/:id', postServices.getPostsById)


module.exports = router