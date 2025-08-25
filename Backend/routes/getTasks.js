const express = require('express'); 
const userTasks = express.Router(); 


userTasks.get('/usertasks', (req, res) => { 
    res.json({output: 'route runs'}); 
}); 


module.exports = userTasks; 


