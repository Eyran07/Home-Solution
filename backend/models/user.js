const mongoose = require("mongoose");

// create a schema for the user object
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  admin: Boolean,
});

// create a model for the user object
const User = mongoose.model("User", userSchema);

module.exports = User;
