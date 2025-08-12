const express = require('express'); 
const homepage = express.Router(); 


homepage.get('/', (req, res) => { // note another thing u need to realize is that you cant have two res.json u need to wrap it into one. 
    res.json({
        btntitle: "Get Started",     
        secondbtntitle: "Learn More", 
        cardData: "Orbi wasn't just an idea I thought of from the rip of my mind it was something I found annoying every morning that I woke up to either go to work, school, or even my day to day life."
    });   
}); 

module.exports = homepage; 