Create a er diagram for Branch Students exercise: https://dbdiagram.io/


//Creating branch_student
Table branch_student{
  id int [pk, increment]
  branch_id int 
  student_id int
}

//Creating branch
Table branch{
  id int [pk, increment]
  name varchar
}

//Creating student
Table student{
  id int [pk, increment]
  name varchar
}


Ref: "branch_student"."branch_id" < "branch"."id"

Ref: "branch_student"."student_id" < "student"."id"