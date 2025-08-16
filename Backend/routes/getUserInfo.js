const express = require('express'); 
const getdata = express.Router();   


// route to get the user data below going to test out from client side 
getdata.post('/userdata', async (req, res) => {  
    try { 
        const { id, email } = req.body;  
        // TODO implement here 
        // TODO figure out how to implement the post data. 
    } catch(err) { 

    }
}); 

module.exports = getdata;  