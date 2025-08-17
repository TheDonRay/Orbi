const express = require('express'); 
const getdata = express.Router();   
const connection = require('../Database/dbconnection'); 


//TODO implement the get route just to get the users in console.log to see if it will work.


// route to create new user
getdata.post('/userdata', (req, res) => {
    // implement the old way where i start of with traditional callback here 
    const { name, email } = req.body;   

    // want to do a check if there is nothing in the body 
    if (!req.body){ 
        return res.status(404).send('Error nothing recieved in the body request'); 
    }
    const UserQuery = 'INSERT INTO users (name, email) VALUES (?, ?)'; 
    connection.query(UserQuery, [name, email], (err, result) => { 
        // start of with our error handling 
        if (err) { 
            console.error(err); 
        } 
        console.log('Successfully inserted new user to the Database'); 
        res.status(201).send({ id: result.insertId, name, email }); 
    }); 
});


// create another endpoint here just to test out your understanding. 
module.exports = getdata;
