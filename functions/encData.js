const openpgp = require("openpgp");

const encData = async (req, res, decryptedData) => {
  try {
    const publicKeyArmored = JSON.parse(decryptedData);

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
    return encryptedData;
  } catch (error) {
    console.log("err on encrypting data:", error.message);
  }
};

module.exports = encData;
