const dbConnection = require('./dbconnection.js'); 

// create a table as such 
const createUserTable = `  
    CREATE TABLE IF NOT EXISTS users ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        email TEXT UNIQUE NOT NULL
    ); 
`;  

// creating another datatable here as such 
const createTasksTable = ` 
    CREATE TABLE IF NOT EXISTS tasks (      
        id INTEGER PRIMARY KEY AUTOINCREMENT,  
        tasks TEXT UNIQUE NOT NULL 
    ); 
`; 
// now we need to connect to the SQllite database and execute the create table query 
function createTable() { 
    dbConnection.serialize(() => {
        dbConnection.run(createUserTable, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            } else {
                console.log("Table was created successfully");
            }
        });


        dbConnection.run(createTasksTable, (err) => { // notice both of these are under the  one serialize call back function 
            if (err) {
                console.error('Error creating tasks tabke', err.message); 
            } 
            else { 
                console.log('Table was created Successfully'); 
            }
        }); 
    }); 
} 

module.exports = createTable; // exported this because we need to call this create table upon server running. 