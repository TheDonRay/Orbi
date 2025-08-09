const dbConnection = require('../Database/db.js'); 

// create a table as such 
const createTableQuery = `  
    CREATE TABLE IF NOT EXISTS users ( 
        id INTEGER PRIMARY KEY, 
        Tasks TEXT NOT NULL, 
        email TEXT NOT NULL
    )
`; // this is an example query to create a table  

// now we need to connect to the SQllite database and execute the create table query 
dbConnection.serialize(() => {
    dbConnection.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log("Table was created successfully");
        }
    });
});
