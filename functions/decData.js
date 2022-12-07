const crypto = require("crypto");
const openpgp = require("openpgp");
const fs = require("fs");

const decData = async (req, res) => {
  try {
    const { data } = req.body;
    // console.log("data", data);
    // const buffer = Buffer.from(data, "base64");
    // const decData = crypto.privateDecrypt(
    //   {
    //     key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    //     passphrase: process.env.PASSPHRASE,
    //   },
    //   buffer
    // );

    const privateKeyArmored = process.env.DEVICE_PRIVATE_KEY;
    const passphrase = "test123";

    const privateKey = (await openpgp.key.readArmored([privateKeyArmored]))
      .keys[0];
    await privateKey.decrypt(passphrase);

    const encryptedData = data;
    const decrypted = await openpgp.decrypt({
      message: await openpgp.message.readArmored(encryptedData),
      privateKeys: [privateKey],
    });

    console.log("ddata", decrypted.data);

    // const decryptedData = decData.toString("utf8");
    // console.log("decryptedData", decryptedData);
    // return decryptedData;
  } catch (error) {
    console.log("err on decrypting data:", error.message);
  }
};

module.exports = decData;
