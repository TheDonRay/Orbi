const express = require('express'); 
const includedata = express.Router();  
const mysql = require('mysql'); 

includedata.get('/getuserData', (req, res) => { 
    res.send('This route gets the userdata its where the database is going to be setup'); 
}) 


module.exports = includedata; 