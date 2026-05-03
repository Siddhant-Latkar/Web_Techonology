const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("public"));
app.use(express.json());

// Set templating engine
app.set("view engine", "ejs");

// Sample data
const parkingData = {
  mall: [true, true, false, true, false, true, true, false],
  station: [true, false, false, true, true, false, true, true],
  airport: [false, true, true, true, false, true, false, true]
};

// Route - Home
app.get("/", (req, res) => {
  res.render("index");
});

// Route - API
app.get("/slots", (req, res) => {
  const location = req.query.location;
  res.json(parkingData[location]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});