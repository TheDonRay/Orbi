// handle connection here to the database here as such   
// import the dotenv stuff as such 
require('dotenv').config({ path: './env/.env.database' }); 

const mysql = require('mysql2/promise'); // rtmember since you are using the promise version it is supposed to return a promise not your traditional callback. 

// note that im going to change it to a pool it will help with the connection 
const pool = mysql.createPool({ 
    connectionLimit: 10, // represents the max number of conenctions in the pool
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASS, 
    database: 'orbidb'
});  

// wrap in a function as such to handle the async/await promise since we are suing mysql2/promise 

async function TestConnection() {  
    try {  
        const connection = await pool.getConnection(); 
        console.log('DataBase Connection was Successful'); 
        connection.release(); 
    } catch (err) { 
        console.error('Error Connecting to the database', err.stack); 
    } 
}; 
// invoke the function as such: 
TestConnection();  

module.exports = pool; 
