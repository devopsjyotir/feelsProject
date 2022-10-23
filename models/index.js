const mongoose = require("mongoose");
const placesSchema = require("./places");
const userSchema = require("./users");

const Places = mongoose.model("Places", placesSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  Places,
  User,
};
