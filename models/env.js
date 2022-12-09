const mongoose = require("mongoose");

const envSchema = mongoose.Schema({
  variableName: String,
  variableValue: String,
});

module.exports = envVar = mongoose.model("variable", envSchema);
