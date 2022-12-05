const express = require("express");

const app = express();
app.use(express.json({ extended: false, limit: "250mb" }));
app.use(
  express.urlencoded({
    limit: "250mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use("*", (req, res) => {
  console.log(req);
});

app.listen(process.env.PORT || 3000);
