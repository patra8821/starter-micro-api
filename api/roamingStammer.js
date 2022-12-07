const crypto = require("crypto");
const decData = require("../functions/decData");
const encData = require("../functions/encData");

const roamingStammer = async (req, res) => {
  try {
    const decryptedData = await decData(req, res);
    console.log("190", decryptedData);

    //   encryption for url and Data_publicKey to send client side
    const encryptedData = await encData(req, res);
    console.log("180", encryptedData);

    // only for testing after testing delete it
    // const decBuffer = Buffer.from(encryptedData, "base64");
    // const dData = crypto.privateDecrypt(
    //   {
    //     key: process.env.DEVICE_PRIVATE_KEY,
    //     passphrase: process.env.DEVICE_PASSPHRASE,
    //   },
    //   decBuffer
    // );
    // console.log("dData:", dData.toString("utf8"));

    res.status(200).json({
      data: encryptedData.toString("base64"),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = roamingStammer;
