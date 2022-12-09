const decData = require("../functions/decData");
const encData = require("../functions/encData");

const roamingStammer = async (req, res) => {
  try {
    const decryptedData = await decData(req, res);
    const encryptedData = await encData(req, res, decryptedData);
    res.status(200).json({ data: encryptedData });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = roamingStammer;
