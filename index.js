const express = require("express");

const app = express();

app.use(exoress.json());

app.use("*", (req, res) => {
  console.log(req);
});

app.listen(process.env.PORT || 3000);
