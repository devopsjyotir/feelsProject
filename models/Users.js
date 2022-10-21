const { Schema } = require("mongoose");

const Users = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    work: { type: String, required: true },
    interests: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = Users;
