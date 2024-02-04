const express = require('express');
const router=express.Router()
const loginController=require('./../controllers/loginController')

router.post('/login',loginController)
router.get('/login',(request,response)=>{
    response.send("Login")
})

module.exports=router
