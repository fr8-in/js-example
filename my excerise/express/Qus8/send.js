const express = require("express");
const app = express();

app.post('/post', async(req, res) => {
    const input = req.body

    const output = [];

    const { branchStudent, branch, student } = input;

    branchStudent.map((elem) => {
        var branchName, studentName;
        branch.find((ele) => {
            if (ele.id === elem.branchId) {
                branchName = ele.name
            }
        });
        student.find((ele) => {
            if (ele.id === elem.studentId) {
                studentName = ele.name
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
    res.json(output)
})


app.listen(4000, () => {
    console.log("Server is running at http://localhost:4000")
})