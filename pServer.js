const express = require("express");
const cors = require("cors");

const checkAuth = require("./middleware/access");
const envVar = require("./models/env");

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.use(express.json({ extended: false, limit: "250mb" }));
console.trace("called db");

app.use("/roaming-stammer", checkAuth, require("./api/roamingStammer"));

app.listen(port, () => {
  console.trace(`server running on port ${port}`);
  console.trace(process.env.CONTRIES);
});
