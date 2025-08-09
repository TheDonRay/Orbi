const express = require('express'); 
const homepage = express.Router(); 


homepage.get('/', (req, res) => { // note another thing u need to realize is that you cant have two res.json u need to wrap it into one. 
    res.json({
        btntitle: "Get Started",     
        secondbtntitle: "Learn More"
    });   
}); 

module.exports = homepage; 