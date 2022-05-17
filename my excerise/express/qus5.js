const express = require("express");
const axios = require("axios");
const app = express();

app.get('/api1', async(req, res) => {
    try {
        let fetch = await axios.get('https://swapi.dev/api/planets/')
        res.json(fetch.data)
    } catch (error) {
        res.json(error)
    }
})

app.get('/api2', async(req, res) => {
    console.log(req.query.search)
    try {
        let fetch = await axios.get(`https://swapi.dev/api/people/?search=${req.query.search}`)
        res.json(fetch.data)
        console.log(fetch.data)
    } catch (error) {
        res.json(error)
    }
})

app.listen(5000, ()=> {
    console.log("server is running at http://localhost:5000")
})