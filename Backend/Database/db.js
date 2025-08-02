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
    try {   
        pool.getConnection((err, connection) => {
        if (err) { 
            console.error('Error connecting to the Database', err.stack); 
        } 
        console.log('Connection was successful!', connection.threadId); 
        connection.release(); 
    }); 
        } 
        catch (err) { 
            console.err('Unexpected error', err); 
        }
}; 
// invoke the function as such: 
TestConnection();  

module.exports = pool; 
