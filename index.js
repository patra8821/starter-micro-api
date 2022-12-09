require("dotenv").config();

const connectDB = require("./config/db");

connectDB().then(() => {
  console.log("Db connected");
  require("./config/setEnvVariables")();
});
