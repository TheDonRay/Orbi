const express = require("express");
const RegisteredUsers = express.Router();

/*The Goal of this route is to basically get all the users that are registered and also get all new users registered */

//TODO: set up route to update db table to have this table.
//TODO: set up get request just to make sure im able to see all the users.
RegisteredUsers.post('/userinterested', (req, res) => {
    // need to destructure here as such: 
    const {email} = req.body;  
    // set up error handling.  
    if (!email || email == "") { 
        res.status(404).send("Invalid Email type, Enter valid email"); 
    } 

    // create the query to actually insert into the database that we have 
    // const MyQuery = 
    
})