const mongoose = require('mongoose');
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "SUBMITTED",
    required: true
  },
  user: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Application', ApplicationSchema);