const router = require('express').Router();
const passport = require('passport');

// Models
const User = require('../models/User');

router.get('/users', (req, res) => {
    res.render('/edit-details');
  });


  router.get('/users/edit-details/:id', async (req, res) => {
   const user = await User.findById(req.params.id);
    res.render('/edit-details',{user});
  });


  router.post('/student-details/:id', async (req, res) => {
    const { name,email,date} = req.body;
    await User.findByIdAndUpdate(req.params.id, {name,email,date});
    req.flash('success_msg', 'Students - Details Updated Successfully');
    res.redirect('/student-details');
   });











module.exports = router;
