const express = require('express'); 
const homepage = express.Router(); 


homepage.get('/', (req, res) => { 
    res.json({btntitle: "Get Started"});      
}); 

module.exports = homepage; 