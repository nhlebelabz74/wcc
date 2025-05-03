const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  rsvps: {
    type: [String],
    default: []
  },
  attendees: {
    type: [String],
    default: []
  },
  nonMemberAttendees: {
    type: [String],
    default: []
  },
}, { _id : false });

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  locationUrl: {
    type: String,
    required: false,
    trim: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  },
  posterUrl: {
    type: String,
    required: false,
    trim: true
  },
  showcaseUrl: {
    type: String,
    required: false,
    trim: true
  },
  attendance: {
    type: attendanceSchema,
    required: true,
    default: {}
  },
  rsvpDeadline: {
    type: Date,
    required: true,
    trim: true
  },
});

module.exports = mongoose.model('Event', EventSchema);