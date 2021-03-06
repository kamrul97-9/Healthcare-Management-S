const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String, required: true, trim: true,
    },

    email: {
      type: String, required: true, unique: true, trim: true,
    },

    password: {
      type: String, required: true, min: 6, max: 32,
    },

    age: {
      type: String, required: true,
    },

    address: {
      type: String, required: true,
    },
    heartrate: {
      type: String,
    },
    temperature: {
      type: String,
    },
  },
);
module.exports = mongoose.model("User", userSchema);
