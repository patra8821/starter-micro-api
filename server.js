const express = require("express");
const cors = require("cors");

const checkAuth = require("./middleware/access");

const port = process.env.PORT;

const app = express();
app.use(cors());

app.use(express.json({ extended: false, limit: "250mb" }));

app.use("/roaming-stammer", checkAuth, require("./api/roamingStammer"));

app.listen(port, () => {
  console.log(`server listing on port ${port}`);
  console.log(process.env.CONTRIES);
});
