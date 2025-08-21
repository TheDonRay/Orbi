const express = require('express'); 
const getdata = express.Router();   
const connection = require('../Database/dbconnection'); 


//TODO implement the get route just to get the users in console.log to see if it will work.


// route to create new user
getdata.post('/userdata', async (req, res) => {
    // implement the old way where i start of with traditional callback here 
    const { name, email } = req.body;   

    // want to do a check if there is nothing in the body 
    if (!name || !email){ 
        return res.status(404).send('Error nothing recieved in the body request'); 
    }
    const UserQuery = 'INSERT INTO users (name, email) VALUES (?, ?)';  
    
    // since im using a connection pool method that returns a promise, not a callback 
    try { 
        const [result] = await connection.query(UserQuery, [name, email]); 
        console.log('Successfully inserted into the DataBase');  
        res.status(201).send({ id: result.insertId, name, email }); 
    } catch (error) { 
        console.error('Database Error', err); 
        res.status(500).send('Database Error'); 
    }
});


// create another endpoint here to get the data from the sql database 
// getdata.get('/fetchdata', (req, res) => { 
//     // start the destructuring  
//     const { name, email } = req.body;    

//     // first check for null values 
//     if ()
//     const fetchQuery = 'SELECT * FROM users'; 


// })

module.exports = getdata;
