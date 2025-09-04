const express = require("express");
const userTasks = express.Router();

//TODO: need to implement logic to recieve users tasks based of the user whos logged in recieve their name email and their tasks to be updated and retrieved

userTasks.get("/usertasks", (req, res) => {
  res.json({ output: "route runs" });
});

module.exports = userTasks;
