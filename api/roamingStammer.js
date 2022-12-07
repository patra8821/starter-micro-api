const crypto = require("crypto");
const decData = require("../functions/decData");
const encData = require("../functions/encData");

const roamingStammer = async (req, res) => {
  try {
    const decryptedData = await decData(req, res);
    console.log("decryptedData", decryptedData);

    // const encryptedData = await encData(req, res, decryptedData);
    // console.log("encryptedData", encryptedData.toString("base64"));

    res.status(200).json({
      data: "success",
      // data: "encryptedData.toString("base64")",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = roamingStammer;
