const express = require('express');
const router = express.Router();

// Models
const Achievements = require('../models/Achievements');

// Helpers
// const { isAuthenticated } = require('../helpers/auth');

// My Achievements
router.get('/archievements', (req, res) => {
  res.render('/student-details');
});




router.post('/student-details', async (req,res) => {
  const {title,description} = req.body;
  const errors = [];
  if (!title){
    errors.push({text:'please write a title'});
  }
  if(!description){
    errors.push({text:'plase write a Description'});
  }
  if(errors.length > 0){
    res.render('new-achievements',{
      errors,
      title,
      description
    });
  }else {
   const newAchievements = new Achievements({title,description});
   await newAchievements.save();
   req.flash('success_msg', 'You are create New Achievement.');
   res.redirect('/student-details')
  }
});


router.get('/achievements', async (req, res) => {
  const achievemens = await Achievements.find();
  res.render('/student-details',{achievemens});
});


// Edit Achievements
// router.get('/Achievements/edit/:id', isAuthenticated, async (req, res) => {
//   const Achievements = await Achievements.findById(req.params.id);
//   if(Achievements.user != req.user.id) {
//     req.flash('error_msg', 'Not Authorized');
//     return res.redirect('/Achievements');
//   } 
//   res.render('Achievements/edit-Achievements', { Achievements });
// });

// router.put('/Achievements/edit/:id', isAuthenticated, async (req, res) => {
//   const { name,email,date } = req.body;
//   await Achievements.findByIdAndUpdate(req.params.id, {name,email,date});
//   req.flash('success_msg', 'Achievements Updated Successfully');
//   res.redirect('/Achievements');
// });

// // Delete 
// router.delete('/Achievements/:id', isAuthenticated, async (req, res) => {
//   await archivements.findByIdAndDelete(req.params.id);
//   req.flash('success_msg', 'archivements Deleted Successfully');
//   res.redirect('/Achievements');
// });

module.exports = router;
