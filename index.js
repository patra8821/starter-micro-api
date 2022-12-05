require("dotenv").config();
const express = require("express");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json({ extended: false, limit: "250mb" }));

app.post("/dec-data", require("./decData"));

app.listen(process.env.PORT || 3000, () => {
  console.log("server listing on 3000");
});
