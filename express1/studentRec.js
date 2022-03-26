const express = require("express");
let app = express();
const addition = require('./function');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/studentRecord", (req, res) => {
  
  let Input = addition
 
  const { branchStudents, branches, students } = Input;
getStudentName = (studentId) =>
  students.find((student) => student.id === studentId)?.name;
getBranchName = (branchId) =>
  branches.find((branch) => branch.id === branchId)?.name;
let output = branchStudents.map((branchStudent) => {
  return { ...branchStudent, studentName: getStudentName(branchStudent.studentId),
    branchName: getBranchName(branchStudent.branchId),
    }
  
  });
  res.status(200).json({branchStudentMap:  output})
  
});

app.listen(3000, () => { 
  console.log("server 3000 is running");
});
