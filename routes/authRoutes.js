const {Router} = require('express');
const router=Router()
const loginController=require('./../controllers/loginController')

router.post('/login',loginController)

module.exports={
    router
}