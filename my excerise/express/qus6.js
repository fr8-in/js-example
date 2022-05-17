const express = require("express");
const app = express();

app.get("/", async(req,res) => {
    res.json("Hello FR8")
})

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000")
})