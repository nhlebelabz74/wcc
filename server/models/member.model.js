const mongoose = require('mongoose');
const { years } = require('../constants');

// transcript and/or degree, matric marks, cv
const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['pdf', 'image'],
  },
  document: {
    type: String,
    required: true,
    trim: true
  },
}, { _id : false }, { timestamps: true });

const degreeSchema = new mongoose.Schema({
  nomenclature: { // BSc, BCom, etc.
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  yearOfStudy: {
    type: String,
    required: true,
    enum: years,
  },
  expectedGraduationYear: {
    type: Number,
    required: true,
    min: 2025,
  },
  documents: {
    type: [documentSchema],
    default: []
  },
}, { _id : false });

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
  degree:{ // added by user when they update their profile
    type: degreeSchema
  },
  consent: { // consent to keep their data and send to firms
    type: Boolean,
    default: false
  },
  documents: { // CV, matric
    type: [documentSchema],
    default: []
  },
  refreshToken: {
    type: String,
    default: ""
  },
});

module.exports = mongoose.model('Member', memberSchema);