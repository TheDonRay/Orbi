const express = require('express'); 
const getdata = express.Router();   
// import the connection here 
const connection = require('../Database/dbconnection'); 

// route to get the user data below going to test out from client side 
getdata.post('/userdata', (req, res) => {  
    // start destructuring as such 
    const { id, email } = req.body; 
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)'; 

    connection.query(query, [id, email], (err, results) => { 
        if (err){ 
            console.error(err); 
            return res.status(500).json({message: 'Database Error', error: err }); 
        } 
        res.status(201).json({ message: 'User added', userId: results.insertId }); 
    })
}); 

module.exports = getdata;  