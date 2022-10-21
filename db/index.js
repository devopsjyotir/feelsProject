const mongoose = require("mongoose");
let MONGODB_URI =
  "mongodb+srv://devopsjyotir:Kodakcr7@cluster0.blzj0z9.mongodb.net/placesDatabase";
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
