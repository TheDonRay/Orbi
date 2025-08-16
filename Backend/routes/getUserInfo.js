const express = require('express'); 
const getdata = express.Router();   
const connection = require('../Database/dbconnection'); 

// route to create new user
getdata.post('/userdata', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    // Check if email already exists
    const checkQuery = 'SELECT * FROM users WHERE email = ?';
    connection.query(checkQuery, [email], (err, results) => {
        if (err) {
            console.error('Error checking for existing user:', err);
            return res.status(500).json({ error: "Database error" });
        }

        if (results.length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Insert new user (id auto-increments)
        const insertQuery = 'INSERT INTO users (email) VALUES (?)';
        connection.query(insertQuery, [email], (err, result) => {
            if (err) {
                console.error('Error creating new user:', err);
                return res.status(500).json({ error: "Failed to add new user" });
            }

            console.log('User Added Successfully');
            return res.status(201).json({
                message: 'New User Added Successfully',
                insertedId: result.insertId
            });
        });
    });
});

module.exports = getdata;
