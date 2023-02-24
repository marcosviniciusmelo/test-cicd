const express = require("express");
const app = express();

app.get("/api", (_req, res) =>  {
  res.status(200).send("Hello world")
})
module.exports = app;