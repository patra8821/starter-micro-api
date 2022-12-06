const axios = require("axios");

const checkAuth = async (req, res, next) => {
  console.log("called");
  try {
    console.log("info", req.body);
    let ip =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.ip;

    console.log("info ip====", ip);
    if (ip.split(":")[2] == "ffff") {
      ip = ip.split(":")[3];
    }

    let respo = await axios.get(`http://ip-api.com/json/${ip}`);
    console.log(respo);
    next();
  } catch (e) {
    console.log("/api/v0.0.1/device/info.js (xinj-16)", e.message); //xinj-16
    res.sendStatus(500);
  }
};

module.exports = checkAuth;
