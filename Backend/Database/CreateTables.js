const dbConnection = require('./dbconnection'); 

// create a table as such 
const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(255), 
        email VARCHAR(255) UNIQUE NOT NULL
    );
`;

// if you are wondering the auto  increment allows us to 
const createTasksTable = `
    CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        task_text VARCHAR(255) NOT NULL
    );
`;

// now we need to connect to the SQllite database and execute the create table query 
async function CreateTables() { 
    try { 
        await dbConnection.execute(createUsersTable);  
        // add console log just to make sure of certain things 
        console.log("Users table ensured (schema won't update if it already existed)."); 
        await dbConnection.execute(createTasksTable);   
          console.log("Tasks table ensured (schema won't update if it already existed)."); 
        console.log('Successfully created databases'); 
    } catch (err) { 
        console.error('Error creating databases', err.message); 
    }
}
module.exports = CreateTables; // exported this because we need to call this create table upon server running. 