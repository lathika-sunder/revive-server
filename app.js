const express = require('express');
const router=express.Router()
const app=express()
const PORT=4040

app.use('/api/v1',router);

app.use(express.json())

app.get('/',(request,response)=>{
    response.send("Hello, This is Revive Server")
}
)
app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
});
