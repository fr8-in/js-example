const express = require("express");
const app = express();

const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello FR8");
});

app.listen(port, () => {
  console.log(`Express app listening at port ${port}`);
});
