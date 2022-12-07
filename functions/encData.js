const crypto = require("crypto");

const encData = async (req, res, decryptedData) => {
  try {
    const resData = {
      url: process.env.URL,
      dataKey: process.env.DATA_PUBLIC_KEY,
    };
    const publicKey = decryptedData.publicKey;
    const encBuffer = Buffer.from(JSON.stringify(resData), "utf8");
    const encyptedRes = crypto.publicEncrypt(publicKey, encBuffer);
    const encryptedData = encyptedRes.toString("base64");
    return encryptedData;
  } catch (error) {
    console.log("err on encrypting data:", error.message);
  }
};

module.exports = encData;
