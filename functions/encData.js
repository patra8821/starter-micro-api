const openpgp = require("openpgp");

const encData = async (req, res) => {
  // console.log("req", req);
  try {
    const publicKeyArmored = req.key;

    const resData = {
      url: process.env.URL,
      dataKey: process.env.DATA_PUBLIC_KEY,
    };

    const publicKey = await openpgp.readKey({
      armoredKey: publicKeyArmored,
    });

    const encryptedData = await openpgp.encrypt({
      message: await openpgp.createMessage({ text: JSON.stringify(resData) }),
      encryptionKeys: publicKey,
    });
    console.log("Encrypted Data:", encryptedData);
    return encryptedData;
  } catch (error) {
    console.log("Error On Encrypting Data:", error.message);
  }
};

module.exports = encData;
