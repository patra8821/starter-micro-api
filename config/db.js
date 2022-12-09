const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB().then(() => {
  require("./setEnvVariables")();
});

// mongoose.connect(
//   process.env.MONGO_DB_URL,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     err
//       ? console.error("err on connecting db", err)
//       : console.log("Successfully connected to database...");
//   }
// );
