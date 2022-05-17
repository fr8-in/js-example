1. Database? 

    => A database is a systematic collection of data. They support electronic storage and manipulation of data. Databases make data management easy.
    => For Example consider Amazon: It needs to store, manipulate, and present data related to members, their orders, products list, member activities, partner customers, advertisements, and a lot more.

What is the Database Transaction?
             => The transaction is a set of operations. The set of the read/write operation on the database is called the database transaction.
             => Read is retrieving information from the database.
             => Write is inserting, updating, and deleting entries from the database.

2. What is ACID property? 
    => ACID properties are used to avoid errors that occur while transactions in sql.
    => ACID is an abbreviation for Atomicity,Consistency,Isolation,Durability

Atomicity:
    The entire transaction takes place at once or doesn’t happen at all.
    =>  There is no midway i.e. transactions do not occur partially.
    =>  Each transaction is considered as one unit and either runs to completion or is not executed at all.
It involves the following two operations. 
    —Abort: If a transaction aborts, changes made to database are not visible. 
    —Commit: If a transaction commits, changes made are visible. 
       //Atomicity is also known as the ‘All or nothing rule’.

Consistency:
    =>Evenness, Stability // The database is consistent before and after the transaction.
    => If the system fails because of the invalid data while doing an operation, revert back the system to its previous state.

Isolation: 
    =>Separation // If you are performing multiple transactions on the single database. 
    =>operation from any transaction should not interfere with operation in other transactions. the execution of all transactions should be isolated from other transactions.

Durability:
    => Ensures transactions are saved permanently and do not accidentally disappear or get erased, even during a database crash.    
    => All the above three properties should be satisfied while the transaction in progress. But durability issues can happen even after the completion of the transaction.
    //So this is the ACID Property After Completion of Transaction.

The ACID properties, in totality, provide a mechanism to ensure correctness and consistency of a database in a way such that each transaction is a group of operations that acts a single unit, produces consistent results, acts in isolation from other operations and updates that it makes are durably stored.

3. Normalization

       Data Redudancy=> It is a condition that occurs when the same piece of data exists in multiple places in the database whereas data inconsistency is a condition that occurs when the same data exists in different formats in multiple tables.

            => Normalization is the process of organizing the data in the database.
            => It is used to minimize the redundancy from a relation or set of relations. It is also used to eliminate the undesirable characteristics like Insertion, Update and Deletion Anomalies.
            => It divides the larger table into the smaller table and links them using relationship.

4. DDL and DML

DDL:
    DDL is short name of Data Definition Language, which deals with database schemas and descriptions, of how the data should reside in the database.

    CREATE - to create a database and its objects like (table, index, views, store procedure, function, and triggers)
    ALTER - alters the structure of the existing database
    DROP - delete objects from the database
    TRUNCATE - remove all records from a table, including all spaces allocated for the records are removed
    COMMENT - add comments to the data dictionary
    RENAME - rename an object

DML:
    DML is short name of Data Manipulation Language which deals with data manipulation and includes most common SQL statements such SELECT, INSERT, UPDATE, DELETE, etc., and it is used to store, modify, retrieve, delete and update data in a database.

    SELECT - retrieve data from a database
    INSERT - insert data into a table
    UPDATE - updates existing data within a table
    DELETE - Delete all records from a database table
    MERGE - UPSERT operation (insert or update)
    CALL - call a PL/SQL or Java subprogram
    EXPLAIN PLAN - interpretation of the data access path
    LOCK TABLE - concurrency Control

