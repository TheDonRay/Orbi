const express = require('express'); 
const app = express(); // main express page  
require('dotenv').config({ path: './env/.env.dev'});  

const PORT = process.env.PORT; 


// simple get request here 
app.get('/', (req, res) => { // default slash always mean homepage
    res.send('Hello from the backend'); 
})

// jsut going to try out some random stuff here. Based of my learning on backend dev 



app.listen(PORT, (err) => {   
    if (err){ 
        console.log('Error running Server', err); 
    }else {
    console.log(`Server running on local URL: http://localhost:${PORT}`);  
    }
})