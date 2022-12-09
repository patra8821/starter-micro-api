require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");
const checkAuth = require("./middleware/access");

const app = express();

app.use("/roaming-stammer", checkAuth, require("./api/roamingStammer"));

connectDB().then(() => {
  console.log("Db connected");
  require("./config/setEnvVariables")();
});
