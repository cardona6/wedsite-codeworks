const mongoose = require('mongoose');
const { Schema } = mongoose;

const AchievementsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model('Achievements', AchievementsSchema);