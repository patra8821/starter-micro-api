const app = require("express").Router();

app.post("/unrigged-postal", require("./decData"));

module.exports = app;
