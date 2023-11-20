const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Projext successfully initiated ");
});

app.listen(3000, () => {
  console.log("listening...");
});
