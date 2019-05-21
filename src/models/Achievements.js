const mongoose = require('mongoose');
const { Schema } = mongoose;

const AchievementsSchema = new Schema({
  id: {
    type:String,
    required:true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type:Date,
    default:Date.now}
});

module.exports = mongoose.model('Achievements', AchievementsSchema);