const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
    require("./setEnvVariables")();
  } catch (e) {
    console.log("/config/db.js (dev-1)", e.message); //dev-1
    process.exit(1);
  }
};

// mongoose
//   .connect(process.env.MONGO_DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Db connected");
//     require("./setEnvVariables")();
//   })
//   .catch(() => {
//     console.log("Db connection error");
//   });

// c98
