const crypto = require("crypto");

const decData = async (req, res) => {
  try {
    const encData = req.body.data;
    const buffer = Buffer.from(encData, "base64");
    const decData = crypto.privateDecrypt(
      {
        key: process.env.PRIVATE_KEY,
        passphrase: process.env.PASSPHRASE,
      },
      buffer
    );
    res.status(200).json(decData.toString("utf8"));
    console.log(decData.toString("utf8"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = decData;
