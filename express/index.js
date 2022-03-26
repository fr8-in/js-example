let express = require('express');
let app=express();

app.get('/hello',(req,res) =>{
    req.json('Hello  ' + res.query.name);
});
app.listen(4040,()=>{
    console.log('server 4040 running');
});
