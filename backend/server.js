const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, resp) => {
  resp.send("Welcome!");
});

app.get("/api/notes", (req, resp) => {
  resp.send(notes);
});
app.get("/api/notes/:id", (req, resp) => {
  const note = notes.find((item) => item._id === req.params.id);
  resp.send(note);
});

app.listen(PORT, () => console.log(`successfully connected to PORT: ${PORT}`));
