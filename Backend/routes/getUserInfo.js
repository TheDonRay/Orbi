const express = require('express'); 
const userdata = express.Router();   
const connection = require('../Database/dbconnection'); 



// route to create new user
userdata.post('/userdata', async (req, res) => {
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


// // create a get request for the retrieval of all the data.  
userdata.get('/getuserdata', async (req, res) => { 
    // i think i dont need this because its trying to get json data when its supposed to be retrieving from the database 
    // const { name, email } = req.body; 
    // if (!name || !email){ 
    //     return res.status(404).send('Error no response for either email or name');  
    // } 
    const myQuery = 'SELECT * FROM users'; 

    try { 
        const [rows, fields] = await connection.query(myQuery); 
        console.log('All users are the following: ', rows); 
        res.status(200).send(rows); 
    } catch (error) { 
        console.error('Error getting all users from database'); 
        res.status(500).send('database Error'); 
    }
}); 

module.exports = userdata;
