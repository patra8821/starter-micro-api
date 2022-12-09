const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.trace("Db connected");
  })
  .catch(() => {
    console.trace("Db connection error");
    require("./setEnvVariables")();
  });
