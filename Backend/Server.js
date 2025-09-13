require("dotenv").config({ path: "./env/.env.dev" }); // using this instead of a config folder much more simpler where i just input the path to my env file. In addition only importing it once. 
const app = require("./ExpressApp.js"); // import the expressapp. 


// PORT definition here.
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error running Server", err);
  } else {
    console.log(`Server running on local URL: http://localhost:${PORT}`);
  }
});