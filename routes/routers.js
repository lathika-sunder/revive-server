const  {Router} = require('express')
const registerUserRouter = require('./registerationRoutes');

const router = Router();

router.use(registerUserRouter);

module.exports = router;