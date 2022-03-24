const express = require("express");
const graphql = require("graphql");

const app = express();
const port = 3000;

app.get("/city", (req, res) => {
  res.send(graphql);
});

app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});
