const dbConnection = require('./dbconnection'); 

// create a table as such 
const createTables = `  
    CREATE TABLE IF NOT EXISTS users ( 
        id INTEGER PRIMARY KEY AUTO_INCREMENT, 
        email VARCHAR(255) UNIQUE NOT NULL
    ); 
    
    CREATE TABLE IF NOT EXISTS tasks ( 
        id INTEGER PRIMARY KEY AUTO_INCREMENT, 
        user_id INTEGER NOT NULL,
        task_text VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
`; 
// now we need to connect to the SQllite database and execute the create table query 
function createTable() {  
      // instead we should follow mysql NOT SQLITE what i was doing before 
      // instead we use pool.execute 
      dbConnection.execute(createTables, (err, results) => { 
        if (err) { 
            console.error('Error creating tables', err.message); 
        } else { 
            console.log('Tables Created Successfully', results); 
        }
      })
} 

module.exports = createTable; // exported this because we need to call this create table upon server running. 