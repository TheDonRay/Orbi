const express = require('express'); 
const app = express(); // main express page    
require('dotenv').config({ path: './env/.env.dev'});  // using this instead of a config folder much more simpler where i just input the path to my env file. 


// adding sql stuff 
const mysql = require('mysql'); // added it here
const bodyParser = require('body-parser'); // middleware used to parse incoming request bodies. 

// used for allowing different domains to communicate with each other on the web, safely and with permission
const cors = require('cors'); 

// importing my routes here below: 
const homepage = require('./routes/homepage.js'); 
const userActivity = require('./routes/getData.js');  
const test = require('./routes/supertest.js'); 

// use of middleware functions both built in and imported by npm 
app.use(express.json()); 
app.use(bodyParser.json());   


// using cors 
app.use(cors()); // used for handling different domains to be able to communicate with each other especially backend and frontend folders. 



// simple get request here 
app.get('/', (req, res) => { // default slash always mean homepage
    res.send('Hello from the backend'); 
})

// implementing the routes here dont forget they use the / here they are mounted here. 
app.use('/api/v1/home', homepage); 
app.use('/api/v1/userActivity', userActivity); 
app.use('/api/v1/', test); 



// PORT definition here. 
const PORT = process.env.PORT; 

app.listen(PORT, (err) => {   
    if (err){ 
        console.log('Error running Server', err); 
    } 
    else {
    console.log(`Server running on local URL: http://localhost:${PORT}`);  
    }
}) 

// going to export the app so it can be used in the tests folder.  
module.exports = app; 