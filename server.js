const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./db");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
const routes = require("./routes");

app.use("/api", routes);
db.on("error", console.error.bind(console, "MongoDb connection error"));

app.get("/", (req, res) => {
  res.json({
    message: "Get Money",
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
