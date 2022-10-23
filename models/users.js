const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    interests: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = userSchema;
