const express = require("express");
const homepage = express.Router();

homepage.get("/", (req, res) => {
  // note another thing u need to realize is that you cant have two res.json u need to wrap it into one.
  res.json({
    btntitle: "Your Inbox, In Orbit",
    secondbtntitle: "Learn More",
    cardData: `Orbi tackles the daily email overload millions face by cutting 
        through clutter to deliver your key tasks, updates, and info in one clear, 
        concise email. Designed to save time and boost productivity, Orbi helps you 
        focus on what matters most—transforming inbox chaos into streamlined efficiency.`,
  });
});

module.exports = homepage;
