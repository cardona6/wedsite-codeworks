const express = require('express');
const router = express.Router();

// Models
const Application = require('../models/My-Applications');

// Helpers
const { isAuthenticated } = require('../helpers/auth');

// New Application
router.get('/applications/add', isAuthenticated, (req, res) => {
  res.render('applications/new-application');
});

router.post('/applications/new-application', isAuthenticated, async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({text: 'Please Write a Title.'});
  }
  if (!description) {
    errors.push({text: 'Please Write a Description'});
  }
  if (errors.length > 0) {
    res.render('applications/new-application', {
      errors,
      title,
      description
    });
  } else {
    const newApplication = new Application({title, description});
    newApplication.user = req.user.id;
    await newApplication.save();
    req.flash('success_msg', 'application Added Successfully');
    res.redirect('/applications');
  }
});

// Get All Applications
router.get('/applications', isAuthenticated, async (req, res) => {
  const applications = await Application.find({user: req.user.id}).sort({date: 'desc'});
  res.render('applications/all-applications', { applications });
});

// Edit Application
router.get('/applications/edit/:id', isAuthenticated, async (req, res) => {
  const application = await Application.findById(req.params.id);
  if(application.user != req.user.id) {
    req.flash('error_msg', 'Not Authorized');
    return res.redirect('/applications');
  } 
  res.render('applications/edit-application', { application });
});

router.put('/applications/edit-application/:id', isAuthenticated, async (req, res) => {
  const { title, description } = req.body;
  await Application.findByIdAndUpdate(req.params.id, {title, description});
  req.flash('success_msg', 'application Updated Successfully');
  res.redirect('/applications');
});

// Delete Notes
router.delete('/applications/delete/:id', isAuthenticated, async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'application Deleted Successfully');
  res.redirect('/applications');
});

module.exports = router;
