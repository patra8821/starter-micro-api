const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected...");
    require("./setEnvVariables")();
  } catch (error) {
    console.log("Database Connection Error", error.message);
    process.exit(1);
  }
};
