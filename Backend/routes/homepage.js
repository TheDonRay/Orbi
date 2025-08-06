const express = require('express'); 
const homepage = express.Router(); 


homepage.get('/', (req, res) => { 
    res.json({keyname: 'This is the Homepage'});      
}); 

module.exports = homepage; 