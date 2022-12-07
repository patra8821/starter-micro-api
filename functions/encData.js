const crypto = require("crypto");

const encData = async (req, res) => {
  try {
    const resData = {
      url: "https://google.com",
      datKey: "JDSYJKbhiok86VJI7BVon-08VB7tv65GV7v",
    };
    const publicKey = process.env.DEVICE_PUBLICK_KEY;
    const encBuffer = Buffer.from(JSON.stringify(resData), "utf8");
    const encRes = crypto.publicEncrypt(publicKey, encBuffer);
    const encryptedData = encRes.toString("base64");
    return encryptedData;
  } catch (error) {
    console.log("err on enc data:", error.message);
  }
};

module.exports = encData;
