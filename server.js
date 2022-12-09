const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.use(express.json({ extended: false, limit: "250mb" }));

app.listen(port, () => {
  console.log(`server listing on port ${port}`);
  console.log(process.env.CONTRIES);
});
