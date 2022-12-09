const express = require("express");
const cors = require("cors");

const checkAuth = require("./middleware/access");

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.use(express.json({ extended: false, limit: "250mb" }));
console.log("pServer.js called");

app.use("/roaming-stammer", checkAuth, require("./api/roamingStammer"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
  console.log("checking env variable", process.env.CONTRIES);
});
