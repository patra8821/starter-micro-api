const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    err
      ? console.error(err)
      : console.log("Successfully connected to database...");
  }
);