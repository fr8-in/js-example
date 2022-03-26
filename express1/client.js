const express = require("express");

const fetch = require("node-fetch");
let app = express();
let bodyParser = require("body-parser");


let apiUrl = "http://localhost:3000/hello";

app.use(bodyParser.json());


fetch(apiUrl).then((response) => {
  if(response.status === 200){ 
   return response.json();
  }else{
    console.log("something worng");
  }
   }).then((data)=>{
     console.log(data);
   })

app.listen(4000, () => {
  console.log("client 4000 running");
});
