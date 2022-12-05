const express = require("express");

const app = express();
app.use(express.json({ extended: false, limit: "250mb" }));

app.post("*", (req, res) => {
  console.log(req);
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3000);
