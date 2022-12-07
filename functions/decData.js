const crypto = require("crypto");

const decData = async (req, res) => {
  try {
    const { data } = req.body;
    console.log("data", data);
    const buffer = Buffer.from(data, "base64");
    const decData = crypto.privateDecrypt(
      {
        key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
        passphrase: process.env.PASSPHRASE,
      },
      buffer
    );
    const decryptedData = decData.toString("utf8");
    console.log("decryptedData", decryptedData);
    return decryptedData;
  } catch (error) {
    console.log("err on decrypting data:", error.message);
  }
};

module.exports = decData;
