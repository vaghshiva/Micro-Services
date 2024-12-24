const express=require('express');
const router=express.Router();
const userController=require('../controller/user.controller');
const authMiddleware=require('../middleware/authMiddleWare');

router.post('/register',userController.register);
router.post('/login',userController.login);
router.get('/logout',userController.logout);
router.get('/profile',authMiddleware.userAuth,userController.register);

module.exports =router;