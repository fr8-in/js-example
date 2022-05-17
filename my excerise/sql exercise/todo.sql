-- Create
CREATE Table person(
  id int NOT NULL,
  name varchar NOT NULL,
  PRIMARY KEY(id)
);

CREATE Table category(
  id int NOT NULL,
  name varchar NOT NULL,
  PRIMARY KEY(id)
);

CREATE Table stage(
  id int NOT NULL,
  name varchar NOT NULL,
  PRIMARY KEY(id)
);

CREATE Table todo(    
  id int NOT NULL,
  person_id int NOT NULL,
  category_id int NOT NULL,
  stage_id int NOT NULL,
  description varchar ,
  due_date date NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (stage_id) REFERENCES stage(id)
);

--Insert
INSERT INTO person(id,name) 
VALUES
(1,'VASANTH'),
(2,'JAY'), 
(3,'SATISH');

INSERT INTO category(id,name) 
VALUES
(1,'Operations'),
(2,'IT');

INSERT INTO stage(id,name) 
VALUES
(1,'Completed'),
(2,'In-progress'),
(3,'Not-Completed');

INSERT INTO todo(id,person_id,category_id,stage_id,description,due_date)
VALUES
(1,1,1,1,' Need to achieve 800 orders','2021-09-30'),
(2,2,2,2,'Train 5 interns','2021-09-30'),
(3,3,2,3,'Get trained in devops','2021-09-30'),
(4,3,2,2,'Get trained in hasura','2021-09-31'),
(5,3,2,2,'Get trained in Hardware','2021-09-31');

--Select 
SELECT person.id,person.name AS person_name,todo.description AS task,category.name AS 
category_name,stage.name AS stage_name,due_date
FROM todo
INNER JOIN person ON person.id = todo.person_id
INNER JOIN category ON category.id = todo.category_id
INNER JOIN stage ON stage.id = todo.stage_id;

--Create a query and convert it to view user_task_count to show the below data

SELECT person.name, count(*) from todo
INNER JOIN person ON person.id = todo.person_id
GROUP BY person.name;
