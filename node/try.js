

let Input = {
    branchStudents : [
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branches: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    students: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
}   
const {branchStudents,branches,students} = Input ; 
getStudentName = (studentId) => students.find(students.id===studentId)?.name
getBranchName = (branchId)=>branches.find(branches.id===branchId)?.name
let output = branchStudents.map(branchStudent => { return {...branchStudents,StudentName : getStudentName(branchStudents.studentId) , Branchname : getBranchName(branchStudents.branchId)}});
console.log(output);