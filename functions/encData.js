const openpgp = require("openpgp");

const encData = async (req, res) => {
  console.log(req.key);
  try {
    const publicKeyArmored = JSON.parse(req.key);

    const resData = {
      url: process.env.URL,
      dataKey: process.env.DATA_PUBLIC_KEY,
    };

    const publicKey = await openpgp.readKey({
      armoredKey: publicKeyArmored.devicePublicKey,
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
