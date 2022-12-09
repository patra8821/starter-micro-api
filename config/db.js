const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db connected");
    require("./setEnvVariables")();
  })
  .catch(() => {
    console.log("Db connection error");
  });
