const express = require("express");
const func = require('./ques')
let app = express();
const bodyParser = require("body-parser");
const read = require("./function");

 
app.use(bodyParser.json());


 app.get("/hello",(req,res)=>{
     res.send(result)
 })


 app.listen(3000,()=>{
     console.log("server 3000 running");
 })
const result=(func(read));


