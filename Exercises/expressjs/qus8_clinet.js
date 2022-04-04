const express = require("express");
const axios = require("axios").default;
const port = 4000;

const app = express();

app.get("/hello", (req, res) => {
  axios.get("http://localhost:3000/hello").then((response) => {
    console.log(response.data);
    res.send(response.data);
  });
});

app.listen(port, () => {
  console.log(`Clinet run at port ${port}`);
});
