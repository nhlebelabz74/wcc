const mongoose = require('mongoose');
const { years } = require('../constants');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  surname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  consent: { // consent to keep their email
    type: Boolean,
    default: false
  },
  yearOfStudy: {
    type: String,
    required: true,
    enum: years,
  },
  refreshToken: {
    type: String,
    default: ""
  },
});

module.exports = mongoose.model('Non-member', memberSchema);