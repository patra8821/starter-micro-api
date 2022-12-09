const openpgp = require("openpgp");

const decData = async (req, res) => {
  try {
    const { data } = req.body;
    const privateKeyArmored = process.env.AUTH_PRIVATE_KEY;
    const passphrase = process.env.AUTH_PASSPHARASE;

    const privateKey = await openpgp.decryptKey({
      privateKey: await openpgp.readPrivateKey({
        armoredKey: privateKeyArmored,
      }),
      passphrase,
    });

    const message = await openpgp.readMessage({
      armoredMessage: data,
    });

    const { data: decrypted } = await openpgp.decrypt({
      message,
      decryptionKeys: privateKey,
    });
    return decrypted;
  } catch (error) {
    console.log("Error On Decrypting Data:", error.message);
  }
};

module.exports = decData;
