// const data = require("../expressjs/userData");

const Branch = (data) => {
  const { branchStudent, branch, student } = data;

  const output = [];

  branchStudent.map((items) => {
    var branchName, studentName;
    branch.find((item) => {
      if (item.id === items.branchId) {
        branchName = item.name;
      }
    });
    student.find((item) => {
      if (item.id === items.studentId) {
        studentName = item.name;
      }
    });
    output.push({
      id: items.id,
      branchId: items.branchId,
      branchName: branchName,
      studentId: items.studentId,
      studentName: studentName,
    });
  });
  // console.log(output);
  return output;
};

// Branch(data);

module.exports = Branch;
