const express = require("express");
const axios = require("axios");
const app = express();

app.get('/', async(req, res) => {
    let output = await axios.get('http://localhost:3000/student')
    res.json(output)
})


app.listen(4001, () => {
    console.log("Server is running at http://localhost:4001")
})