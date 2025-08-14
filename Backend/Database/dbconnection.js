// handle connection here to the database here as such   
// import the dotenv stuff as such 
require('dotenv').config({ path: './env/.env.database' }); 

const mysql = require('mysql2'); 

// note that im going to change it to a pool it will help with the connection 
const pool = mysql.createPool({ 
    connectionLimit: 10, // represents the max number of conenctions in the pool
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASS, 
    database: 'orbidb'
});  

// wrap in a function as such to handle the try and catch something like this 
function TestConnection() { 
    pool.getConnection((err, connection) => {
        if (err) { 
            console.error('Error connecting to the Database', err.stack);  
            return; // helps me return early error
        } 
        console.log('Connection was successful!', connection.threadId); 
        connection.release(); 
    }); 
}; 
// invoke the function as such: 
TestConnection();  

module.exports = pool; 
