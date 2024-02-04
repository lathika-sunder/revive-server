const express = require('express');
const app = express()
const routers = require("./routes/routers.js");
const cors=require('cors')
const dotenv=require('dotenv');
const { connectDB } = require('./models/db');
dotenv.config()
const PORT=process.env.PORT||4040

app.use(cors())
app.use(express.json())
//connection to DB
connectDB()
//use all routes
app.use("/api", routers);

//app.use('/api/v1',router);
//router.use('/',loginRouter)


app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
});
