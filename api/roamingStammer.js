const encData = require("../functions/encData");

const roamingStammer = async (req, res) => {
  try {
    console.log("req", req.devicePublicKey);
    const encryptedData = await encData(req, res);
    res.status(200).json({ data: encryptedData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = roamingStammer;
