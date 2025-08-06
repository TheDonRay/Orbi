const express = require('express'); 
const learningsupertest = express.Router();


learningsupertest.get("/greet", (req, res) => { // I was getting the error because my code here is synchronous but the test is asynchronouys
    const name = req.query.name || "World"; // i assume if we dont get any response just output world.  
    res.json({ message: `Hello, ${name}!` });
});

module.exports = learningsupertest;
