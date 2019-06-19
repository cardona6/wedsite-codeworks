const router = require('express').Router();
const passport = require('passport');

// Models
const Achievements = require('../models/Achievements');

// My Achievements
router.get('/student-details', async (req, res) => {
  const achi = await Achievements.find()
  res.render('student-details', {achi});
});

router.post('/student-details', async (req,res) => {
  const errors = [];
  const { title, description} = req.body;
  if (!title){
    errors.push({text:'please write a title'});
  }
  if(!description){
    errors.push({text:'plase write a Description'});
  }
  if(errors.length > 0){
    res.render('student-details',{
      errors,
      title,
      description
    });
  }else {
   const newAchievements = new Achievements({title, description});
   await newAchievements.save();
   req.flash('success_msg', 'You are create New Achievement.');
   res.redirect('/student-details')
  }
});

// Delete 
router.delete('/archievemen/:id', async (req, res) => {
  await Achievements.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'You are DELETE Achievement.');
  res.redirect('/student-details');
});

module.exports = router;
