const express = require('express'); 
const userTasks = express.Router(); 


userTasks.get('/usertasks', (req, res) => { 
    res.send('route being set up'); 
}); 


module.exports = userTasks; 


