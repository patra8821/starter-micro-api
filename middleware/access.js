const axios = require("axios");

const checkAuth = async (req, res, next) => {
  try {
    let ip =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.ip ||
      "";

    console.trace("info ip====", ip);
    let response = await axios.get(`http://ip-api.com/json/${ip}`);
    const countryArr = process.env.CONTRIES.split("_");
    console.trace(response.data.country.toLowerCase(), countryArr);
    countryArr.map((countryName) => {
      if (
        countryName.toLowerCase() === response.data.country.toLowerCase() ||
        countryName.toLowerCase() ===
          response.data.country.split(" ").join("").toLowerCase()
      )
        next();
      console.trace(countryName.toLowerCase());
    });
    console.trace(response.data.country);
    res.status(200).json({ message: "Varification Completed" });
  } catch (error) {
    console.trace("ip getting failed", error.message);
  }
};

module.exports = checkAuth;
