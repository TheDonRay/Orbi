const express = require('express'); 
const homepage = express.Router(); 


homepage.get('/', (req, res) => { 
    res.send('This is the Homepage');      
}); 

module.exports = homepage; 