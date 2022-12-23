const express=require('express')
const { createPost, likeAndUnlikePost, deletePost, getPostOfFollowing, updateCaption, addComment, deleteComment } = require('../controllers/Post')
const { isAuthenticated } = require('../middleware/auth')

const router=express.Router()

router.route("/post/upload").post(isAuthenticated,createPost)

router.route("/post/:id").get(isAuthenticated,likeAndUnlikePost).put(isAuthenticated,updateCaption)

router.route("/post/:id").delete(isAuthenticated,deletePost)

router.route("/posts").get(isAuthenticated,getPostOfFollowing)
router.route("/post/addcomment/:id").put(isAuthenticated,addComment)

router.route("/post/deletecomment/:id").delete(isAuthenticated,deleteComment)

module.exports=router