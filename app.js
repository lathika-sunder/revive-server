const express = require('express');
const router=express.Router()
const app=express()
const loginRouter=require('./routes/authRoutes')
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()
const PORT=process.env.PORT||4040

app.use(cors())
app.use(express.json())

app.use('/api/v1',router);
router.use('/api/v1/login',loginRouter)



router.get('/',(request,response)=>{
    response.send("Hello, This is Revive Server")
}
)
app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
});
