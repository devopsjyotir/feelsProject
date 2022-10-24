const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
  {
    interests: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", Users);
