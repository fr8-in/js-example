let express = require('express');
let app = express()


app.get('/',(req,res) => {
 res.send("hello")
});
app.get('/hello',(req,res) => {
 res.send("hello "+req.query.name)
});

app.listen(3000,()=>{
    console.log("server 3000 running")
})
