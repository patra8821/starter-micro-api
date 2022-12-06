const crypto = require("crypto");

const decData = async (req, res) => {
  try {
    const encData = req.body.data;
    const buffer = Buffer.from(encData, "base64");
    const decData = crypto.privateDecrypt(
      {
        key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
        passphrase: process.env.PASSPHRASE,
      },
      buffer
    );
    console.log(decData.toString("utf8").replace(/\\/g, ""));
    res.status(200).json(decData.toString("utf8"));
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = decData;
