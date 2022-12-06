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
    console.log(decData.toString("utf8"));
    res.status(200).json({ url: "", publicKey: "" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = decData;
