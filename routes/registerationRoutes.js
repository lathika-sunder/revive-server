const { Router } = require('express');
const userModel = require('../models/userModel');
const { body, validationResult, matchedData, checkSchema } = require('express-validator');
const userRegisterValidator  = require('../validators/userRegisterValidator');
const bcrypt = require('bcrypt')

const router = Router();

router.post("/register-user", checkSchema(userRegisterValidator) ,(req, res) => {
    //check email_id already exists (DONE)
        //check email_id valid (DONE)
    //check phone number valid (DONE)
    //check user_type valid  (DONE)
    const result = validationResult(req);
    if ((result.errors.length === 0)) {
        //hash password and store in DB
        bcrypt.genSalt(1, (err, salt) => {
            bcrypt.hash(req.body['password'], salt, (err, hash) => {
                userModel.insertMany([{ ...req.body, password: hash }])
                    .then(() => res.status(200).send("Registered Successfully"))
                    .catch((err) => res.status(401).send(err.errmsg));
            })
        })
        return;
    }
    res.send(result);
   
})



module.exports = router;