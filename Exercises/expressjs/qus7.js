const express = require("express");
const Branch = require("../nodejs/qus3");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Use this link 'localhost:3000/hello'");
});

app.get("/hello", (req, res) => {
  res.send(`Hello ${req.query.name ? req.query.name : "FR8"}`);
});

app.post("/hello", (req, res) => {
  const output = Branch(req.body);
  res.send({
    branchStudentMap: output,
  });
});

app.listen(port, () => {
  console.log(`Single Express project run at port ${port}`);
});
