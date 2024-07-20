const  {Router} = require('express')
const registerUserRouter = require('./registerationRoutes');
const loginController = require('../controllers/loginController');

const router = Router();

router.use(registerUserRouter);


//Login
router.post('/login',loginController)

module.exports = router;