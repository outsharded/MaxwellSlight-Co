const mongoose = require('mongoose');

// Create a Mongoose schema for the user
const userSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  orders: [{ address: String, contents: String, orderCreated: { type: Date, default: Date.now }, }],
});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;

  