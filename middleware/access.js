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
    console.log(response.data.country.toLowerCase(), countryArr);
    countryArr.map((countryName) => {
      if (
        countryName.toLowerCase() === response.data.country.toLowerCase() ||
        countryName.toLowerCase() ===
          response.data.country.split(" ").join("").toLowerCase()
      )
        next();
    });
    console.log(response.data.country);
    res.status(200).json({ message: "Varification Completed" });
  } catch (error) {
    console.log("ip getting failed", error.message);
  }
};

module.exports = checkAuth;
