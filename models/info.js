const mongoose = require("mongoose");

const infoSchema = mongoose.Schema({
  imei: {
    type: String,
    required: true,
  },
  port: String,
  model: String,
  version: String,
  appVersion: {
    type: String,
    required: true,
  },
  simSerial: String,
  operator: String,
  deviceId: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = info = mongoose.model("info", infoSchema);
