const express = require('express'); 
const getdata = express.Router();  


getdata.get('/getuserData', (req, res) => { 
    res.send('This route gets the userdata its where the database is going to be querying'); 
}) 


module.exports = getdata; 