require("dotenv").config();

console.log("called");
const connectDB = require("./config/db");

connectDB().then(() => {
  console.log("Db connected");
  require("./config/setEnvVariables")();
});
