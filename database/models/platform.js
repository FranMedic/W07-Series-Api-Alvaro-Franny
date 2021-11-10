const { Schema, model } = require("mongoose");

const platformSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Platform = model("Platform", platformSchema, "Platforms");

module.exports = Platform;
