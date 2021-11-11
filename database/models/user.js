const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  series: {
    type: [Types.ObjectId],
    ref: "Serie",
    required: true,
  },
});

const User = model("User", userSchema, "Users");

userSchema.set("toJSON", {
  virtuals: false,
});

module.exports = User;
