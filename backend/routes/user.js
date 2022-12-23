const express=require('express')
const { register, login, followUser, logout, updatePassword, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers, forgotPassword, resetPassword } = require('../controllers/user')
const { isAuthenticated } = require('../middleware/auth')

const router=express.Router()

router.route('/user/register').post(register)
router.route('/user/login').post(login)
router.route('/user/follow/:id').get(isAuthenticated,followUser)
router.route('/user/logout').get(logout)
router.route('/user/updatepassword').put(isAuthenticated,updatePassword)
router.route('/user/updateprofile').put(isAuthenticated,updateProfile)
router.route('/user/deletemyprofile').delete(isAuthenticated,deleteMyProfile)
router.route('/user/ownprofile').get(isAuthenticated,myProfile)
router.route('/user/getuserprofile/:id').get(isAuthenticated,getUserProfile)
router.route('/user/getalluser').get(isAuthenticated,getAllUsers)
router.route('/forgotpassword').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword)

module.exports=router