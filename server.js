const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Get Money",
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
