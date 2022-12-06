require("dotenv").config();
const express = require("express");
const cors = require("cors");

require("./config/db");
const checkAuth = require("./middleware/access");

const app = express();
app.use(cors());

app.use(express.json({ extended: false, limit: "250mb" }));

app.use("/roaming-stammer", checkAuth, require("./api/roamingStammer"));

app.listen(process.env.PORT || 3000, () => {
  console.log("server listing on 3000", arr);
});
