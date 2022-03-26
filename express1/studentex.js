let Input = req.body
const {branchStudents,branches,students} = Input;
getStudentName= (studentId) => students.find(student=>student.id===studentId)?.name
getBranchName = (branchId) => branches.find(branch=>branch.id===branchId)?.name
let output = branchStudents.map(branchStudent => { return {...branchStudent,studentName:getStudentName(branchStudent.studentId),branchName:getBranchName(branchStudent.branchId)}});
console.log(output);