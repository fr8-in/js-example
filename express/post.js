let express = require('express')
let app = express();
let bodyParser = require('body-parser')


app.post('/postRec',(req,res) =>{
    res.json({
        name:"hello "+req.body.name
    });
});
app.listen(3000,()=>{
    console.log("server 3000 running")
});