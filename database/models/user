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
    default: false,
  },
  series: {
    type: [Types.ObjectId],
    required: true,
  },
});

const User = model("User", userSchema);

userSchema.set("toJSON", {
  virtuals: false,
});

module.exports = User;
