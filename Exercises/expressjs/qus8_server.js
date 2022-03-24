const express = require("express");
const Branch = require("../nodejs/qus3");
const app = express();
const port = 3000;

const data = require("../expressjs/userData");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/hello", (req, res) => {
  const output = Branch(data);
  res.send(output);
});

app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});
