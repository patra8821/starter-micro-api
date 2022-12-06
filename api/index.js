const app = require("express").Router();

app.use("/quaking-spoon", require("./controller"));

module.exports = app;
