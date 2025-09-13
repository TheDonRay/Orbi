const express = require("express");
const expressapp = express(); // main express page


// TODO seperate the server and the app for better understanding and change in the actual package.json. 
// adding sql stuff
const mysql = require("mysql"); // added it here
// // can also write it like this in es6
// import mysql from 'mysql';
//const bodyParser = require('body-parser'); // middleware used to parse incoming request bodies.
// require('./scripts/checkforTable.js');  // if i uncomment this it runs everytime I start the server (app.js) in production comment this out.
// used for allowing different domains to communicate with each other on the web, safely and with permission
const cors = require("cors");

// importing my routes here below:
const homepage = require("./routes/homepage.js");
const userInfo = require("./routes/getUserInfo.js");
const userTasks = require("./routes/getTasks.js");

// const retrieveUsers = require('./routes/getUserInfo.js');

// from Database
const { CreateTables } = require("./Database/CreateTables.js"); // remember the db.connection is already imported in the createTable.js file so i dont need to import the connection file.
// TO RUN:  we need to invoke the createTable function below:
CreateTables(); // here we invoked the function to run the script.

// use of middleware functions both built in and imported by npm
expressapp.use(express.json());
//app.use(bodyParser.json()); // keep in mind that we only need one json parser since it can cause race conflicts.

// using cors
expressapp.use(cors()); // used for handling different domains to be able to communicate with each other especially backend and frontend folders.

// simple get request here
expressapp.get("/", (req, res) => {
  // default slash always mean homepage
  res.send("Hello from the backend");
});

// implementing the routes here dont forget they use the / here they are mounted here.
expressapp.use("/api/v1/home", homepage);
expressapp.use("/api/v1/user", userInfo);
expressapp.use("/api/v1/", userTasks);
// app.use('/api/v1/', retrieveUsers); this was for the get route to see if i can get all the data from the route.


// going to export the app so it can be used in the tests folder.
module.exports = expressapp;
