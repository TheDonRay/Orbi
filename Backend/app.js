const express = require('express'); 
const app = express(); // main express page 

const PORT = 5050; 


// simple get request here 
app.get('/', (req, res) => { // default slash always mean homepage
    res.send('Hello from the backend'); 
})

// jsut going to try out some random stuff here. Based of my learning on backend dev 



app.listen(PORT, () => { 
    console.log(`Server running on local URL: http://localhost:${PORT}`); 
})