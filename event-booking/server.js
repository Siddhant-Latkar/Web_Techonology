const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

let events = [
  { id: 1, name: "Tech Seminar", slots: 5 },
  { id: 2, name: "AI Workshop", slots: 3 }
];

app.get("/events", (req, res) => {
  res.json(events);
});

app.post("/book", (req, res) => {
  const { name, eventId } = req.body;

  const event = events.find(e => e.id == eventId);

  if (!event || event.slots <= 0) {
    return res.json({ message: "Booking failed" });
  }

  event.slots--;

  res.json({ message: "Booking successful!" });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});