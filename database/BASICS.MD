# **DATABASE**

A database is a collection of data stored in a computer and structured to keep the data in a form and place that is easily accessible to users of the database who wish to exploit the uses of the database.

Thus data management of the database is easy when one understands what is database since it supports manipulation of data and electronic storage. Data can be organized into files or into tables with columns, rows and index to make it easy to find and define a database.

Since databases are used to manage, retrieve and handle data iDDL AND DMLf the popular databases use SQL queries where **SQL** means **Structured Query Language**.

SQL the **DBMS - Database Management System** uses tuple relational calculus and relational algebra with a cylindrical structure to display the database image. Some of the popular versions used today are _MySQL, Oracle, Sybase, MongoDB, PostgreSQL, Informix, SQL Server_, etc.

## **TYPES**

- Distributed databases
- Relational databases
- Object-oriented databases
- Centralized database
- Open-source databases
- Cloud databases
- NoSQL databases
- Document/JSON database
- Graph databases

# **ACID**

## **Atomicity**

It simply says **“All or Nothing”**. There is no intermediate.

If you are doing any database transaction (set of the **read/write** operations), all the operations should be executed otherwise none.

All the operation in the transaction is considered to be one unit or atomic task.

If the system _fails_ or any _read/write conflicts_ occur during the transaction, the system needs to revert back to its previous state.

### **_Example_**

- Deduct the amount of $100 from Alice’s account.
- Add amount $100 to Bob’s account.

All operations in this set should be done.

If the system fails to add the amount in Bob’s account after deducting from Alice’s account, revert the operation on Alice’s account.

## **Consistency**

Every attribute in the database has some rules to ensure the stability of the database. The constraint puts on the data value should be constant before and after the execution of the transaction.

If the system fails because of the invalid data while doing an operation, revert back the system to its previous state.

### **_Example_**

The total amount in Alice’s and Bob’s account should be the same before and after the transaction.

The sum of the money in Alice and Bob’s account before and after the transaction is $200. So this transaction preserves consistency ACID properties in DBMS.

## **Isolation**

If you are performing multiple transactions on the single database, operation from any transaction should not interfere with operation in other transactions. the execution of all transactions should be isolated from other transactions.

### **_Example_**

If there is any other transaction (between Mac and Alice) going, it should not make any effect on the transaction between Alice and Bob. Both the transactions should be isolated.

## **Durability**

All the above three properties should be satisfied while the transaction in progress. But durability issues can happen even after the completion of the transaction.

So this is the ACID Property After Completion of Transaction.

The changes made during the transaction should exist after completion of the transaction.

Sometimes it may happen as all the operation in the transaction completed but the system fails immediately. In that case, changes made while transactions should persist. The system should return to its previous stable state.

### **_Example_**

It may happen. A system gets crashed after completion of all the operations. If the system restarts it should preserve the stable state. An amount in Alice and Bob’s account should be the same before and after the system gets a restart.

# **NORMALIZATION**

Normalization is the process to eliminate data redundancy and enhance data integrity in the table. Normalization also helps to organize the data in the database.

It is a multi-step process that sets the data into tabular form and removes the duplicated data from the relational tables.

- 1st Normal Form (1NF)
- Second Normal Form (2NF)
- Third Normal Form (3NF)
- Boyce CoddNormal Form (BCNF)

## **1st Normal Form (1NF)**

- A table is referred to as being in its First Normal Form if **atomicity** of the table is 1.
- Here, atomicity states that a single cell cannot hold multiple values. It must hold only a single-valued attribute.
- The First normal form disallows the multi-valued attribute, composite attribute, and their combinations.

## **Second Normal Form (2NF)**

- The first condition for the table to be in Second Normal Form is that the table has to be in **First Normal Form**. The table should not possess partial dependency.
- The partial dependency here means the proper subset of the candidate key should give a non-prime attribute.

## **Third Normal Form (3NF)**

- The first condition for the table to be in Third Normal Form is that the table should be in the **Second Normal Form**.
- The second condition is that there should be no transitive dependency for non-prime attributes, which indicates that non-prime attributes (which are not a part of the candidate key) should not depend on other non-prime attributes in a table.

## **Boyce CoddNormal Form (BCNF)**

- The first condition for the table to be in Boyce Codd Normal Form is that the table should be in the **third normal form**. Secondly, every Right-Hand Side (RHS) attribute of the functional dependencies should depend on the super key of that particular table.

# **DDL AND DML**

 <table>
  <tr>
    <th>DDL</th>
    <th>DML</th>
  </tr>
  <tr>
    <td>Data Definition Language (DDL) helps you to define the database structure or schema. </td>
    <td>Data Manipulation Language (DML command) allows you to manage the data stored in the database. </td>
  </tr>
  <tr>
    <td>DDL command is used to create the database schema.</td>
    <td>DML command is used to populate and manipulate database.</td>
  </tr>
  <tr>
    <td>DDL is not classified further. </td>
    <td>DML is classified as Procedural and Non and Procedural DMLs. </td>
  </tr>
  <tr>
    <td>CREATE, ALTER, DROP, TRUNCATE AND COMMENT and RENAME, etc. </td>
    <td>INSERT, UPDATE, DELETE, MERGE, CALL, etc. </td>
  </tr>
  <tr>
    <td>SQL Statement can’t be rollback</td>
    <td>SQL Statement can be a rollback</td>
  </tr>
</table>

# **SQL - JOINS**

## **SQL INNER JOIN**

Chances are, you've already written a SQL statement that uses an **SQL INNER JOIN**. It is the most common type of SQL join. **SQL INNER JOINS** return all rows from multiple tables where the join condition is met.

### _Syntax_

    SELECT columns
    FROM table1
    INNER JOIN table2
    ON table1.column = table2.column;

## **SQL LEFT OUTER JOIN**

This type of join returns all rows from the **LEFT**-hand table specified in the ON condition and only those rows from the other table where the joined fields are equal (join condition is met).

### _Syntax_

    SELECT columns
    FROM table1
    LEFT OUTER JOIN table2
    ON table1.column = table2.column;

## **SQL RIGHT OUTER JOIN**

This type of join returns all rows from the **RIGHT**-hand table specified in the ON condition and only those rows from the other table where the joined fields are equal (join condition is met).

### _Syntax_

    SELECT columns
    FROM table1
    RIGHT OUTER JOIN table2
    ON table1.column = table2.column;

## **SQL FULL OUTER JOIN**

This type of join returns all rows from the **LEFT-hand** table and **RIGHT-hand** table with *NULL* values in place where the join condition is not met.

### _Syntax_

    SELECT columns
    FROM table1
    FULL OUTER JOIN table2
    ON table1.column = table2.column;


