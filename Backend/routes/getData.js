const express = require('express'); 
const getdata = express.Router();   


// this may be a asynchronous route with a promise. 
getdata.get('/getuserData', (req, res) => {   
    // start querying here. 
    res.send("This route gets the userdata its where the database is going to be querying");  
})  

// Practice with how to do it with a post Request put and a patch request. Because those requests update the database or change existing data.

module.exports = getdata;  