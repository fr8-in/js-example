--4. Write following queries (Use hasura instance for learning)

--a) Create Branch Students exercise table

--create branch_student table

    CREATE TABLE branch_student(
    id int NOT NULL AUTO,
    branch_id int NOT NULL,
    student_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (branch_id) REFERENCES branch(id),
    FOREIGN KEY (student_id) REFERENCES student(id)
    );

--create branch table

    CREATE TABLE branch(
    id int NOT NULL,
    branch_name varchar(255),
    PRIMARY KEY (id)
    );

--create student table

    CREATE TABLE student(
    id int NOT NULL,
    student_name varchar(255),
    PRIMARY KEY (id)
    );


--Insert Branch Students exercise

--insert rows in branch_student table

    INSERT INTO branch_student
    VALUES ( 1, 1, 1),
           ( 2, 2, 2),
           ( 3, 2, 1),
           ( 4, 1, 3);

--insert rows in branch table

    INSERT INTO branch
    VALUES ( 1, 'CSE'),
           ( 2, 'ECE');

--insert rows in student table

    INSERT INTO student
    VALUES ( 1, 'Jay'),
           ( 2, 'Sathish'),
           ( 3, 'Rajesh');


--Query and get branch student results

SELECT branch_student.id, branch_student.branch_id, branch.branch_name, 
branch_student.student_id, student.student_name
FROM branch_student
INNER JOIN branch ON branch_student.branch_id = branch.id
INNER JOIN student ON branch_student.student_id = student.id;

