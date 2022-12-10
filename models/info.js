const mongoose = require("mongoose");

const infoSchema = mongoose.Schema({
  info: String,
});

module.exports = info = mongoose.model("info", infoSchema);
