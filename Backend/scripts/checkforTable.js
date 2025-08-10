
const dbpool = require('../Database/db.js'); 

dbpool.query("SHOW TABLES LIKE 'users'", (err, results) => { 
    if (err) { 
        console.error('Error checking for table.', err); // could be that table is not found 
    } 
    else if (results.length > 0){ 
        console.log('Table "users" exists'); 
    }
    else { 
        console.log('Table does not exist need to make one'); 
    }
})