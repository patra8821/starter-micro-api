const crypto = require("crypto");

const decData = async (req, res) => {
  try {
    const { data } = req.body;
    const buffer = Buffer.from(data, "base64");
    const decData = crypto.privateDecrypt(
      {
        key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
        passphrase: process.env.PASSPHRASE,
      },
      buffer
    );
    const decryptedData = decData.toString("utf8");
    return decryptedData;
  } catch (error) {
    console.log("err on dec data:", error.message);
  }
};

module.exports = decData;
