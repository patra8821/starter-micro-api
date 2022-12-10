const axios = require("axios");
const decData = require("../functions/decData");
const info = require("../models/info");

const checkAuth = async (req, res, next) => {
  try {
    const infoData = new info({
      info: req.body.data,
    });

    infoData.save();

    const decryptedData = await decData(req, res);
    const data = JSON.parse(decryptedData);

    let ip =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.ip ||
      "";

    let response = await axios.get(`http://ip-api.com/json/${ip}`);
    console.log("request Country:", response.data.country);
    const countryArr = process.env.COUNTRIES.split("_");
    countryArr.map((countryName) => {
      if (
        countryName.toLowerCase() === response.data.country.toLowerCase() ||
        countryName.toLowerCase() ===
          response.data.country.split(" ").join("").toLowerCase()
      ) {
        req.devicePublicKey = data.devicePublicKey;
        next();
      }
    });
  } catch (error) {
    console.log("Error On Device Athentication:", error.message);
  }
};

module.exports = checkAuth;
