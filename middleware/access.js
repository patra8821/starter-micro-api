const axios = require("axios");
const decData = require("../functions/decData");

const checkAuth = async (req, res, next) => {
  try {
    const decryptedData = await decData(req, res);

    let ip =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.ip ||
      "";

    let response = await axios.get(`http://ip-api.com/json/${ip}`);
    const countryArr = process.env.CONTRIES.split("_");
    countryArr.map((countryName) => {
      if (
        countryName.toLowerCase() === response.data.country.toLowerCase() ||
        countryName.toLowerCase() ===
          response.data.country.split(" ").join("").toLowerCase()
      )
        req.key = decryptedData;
      next();
      console.log("request Country:", response.data.country);
    });
  } catch (error) {
    console.log("Error On Device Athentication:", error.message);
  }
};

module.exports = checkAuth;
