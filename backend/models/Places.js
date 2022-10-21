const { Schema } = require("mongoose");

const Places = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    attributes: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = Places;
