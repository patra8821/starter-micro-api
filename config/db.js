const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB().then(() => {
  console.log("Db connected");
  require("./setEnvVariables")();
});
