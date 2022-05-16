const data = {
    branchStudent: [
      { id: 1, branchId: 1, studentId: 1 },
      { id: 2, branchId: 2, studentId: 2 },
      { id: 3, branchId: 2, studentId: 1 },
      { id: 4, branchId: 1, studentId: 3 },
    ],
    branch: [
      { id: 1, name: "CSE" },
      { id: 2, name: "IT" },
    ],
    student: [
      { id: 1, name: "Jay" },
      { id: 2, name: "Sanjay" },
      { id: 3, name: "Rajesh" },
    ],
  };

  const output=[];

  const { branchStudent, branch, student } = data;

  branchStudent.map((elem) => {
      var branchName, studentName;
      branch.find((ele) => {
          if(ele.id===elem.branchId){
              branchName = ele.name
          }
      });
      student.find((ele)=> {
          if(ele.id===elem.studentId){
              studentName=ele.name
          }
      });
      output.push({
          id: elem.id,
          branchId: elem.branchId,
          branchName: branchName,
          studentId: elem.studentId,
          studentName: studentName
      })
  })

  console.log(output);