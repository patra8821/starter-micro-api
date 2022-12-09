const decData = require("../functions/decData");
const encData = require("../functions/encData");

const roamingStammer = async (req, res) => {
  try {
    console.log("called");
    const decryptedData = await decData(req, res);
    const encryptedData = await encData(req, res, decryptedData);
    console.log("roaming,Data:", encryptedData);
    res.status(200).json(encryptedData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = roamingStammer;
