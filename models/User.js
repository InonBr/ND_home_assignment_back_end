const mongoose = require('mongoose');

/**
 * used mongoose in order to create a schema for the users.
 * usernames and emails must be unique
 * when creating a new user, we will also store the date and time
 */

const UserSchema = new mongoose.Schema({
  username: {
    required: true,
    unique: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  city: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    default: '',
  },
  postalCode: {
    type: String,
    default: '',
  },
  aboutMe: {
    type: String,
    default: '',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('users', UserSchema);
