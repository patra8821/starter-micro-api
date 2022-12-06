const axios = require("axios");
const countries = process.env.CONTRIES;

const checkAuth = async (req, res, next) => {
  try {
    let ip =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.ip ||
      "";

    console.log("info ip====", ip);
    let response = await axios.get(`http://ip-api.com/json/${ip}`);
    const countryArr = countries.split("_");
    countryArr.map(
      (countryName) => countryName === response.data.country && next()
    );
    console.log(response.data.country);
  } catch (error) {
    console.log("ip getting failed", response.data.country, error.message);
  }
};

module.exports = checkAuth;
