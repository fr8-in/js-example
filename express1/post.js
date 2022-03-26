let express = require('express');
let app = express();
let bodyParser = require('body-parser');

 app.use(bodyParser.json());

app.post('/postRec',(req,res) =>{
    res.json({
         output:"hello "+req.body.name
    });
    
});
app.listen(3000,()=>{
    console.log("server 3000 running")
});