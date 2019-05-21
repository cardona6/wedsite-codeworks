const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/student-details', (req, res) => {
  res.render('student-details');
});

router.get('/add-achievements', (req, res) => {
  res.render('add-achievements');
});

router.get('/new-achievements', (req, res) => {
  res.render('new-achievements');
});

router.get('/edit-details', (req, res) => {
  res.render('edit-details');
});

router.get('/media', (req, res) => {
  res.render('media');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/general-information', (req, res) => {
  res.render('general-information');
});

router.get('/how-aply', (req, res) => {
  res.render('how-aply');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/our-performarce', (req, res) => {
  res.render('our-performarce');
});

router.get('/student-charter', (req, res) => {
  res.render('student-charter');
});

router.get('/College-certification', (req, res) => {
  res.render('College-certification');
});

router.get('/ecd', (req, res) => {
  res.render('ecd');
});

router.get('/sqa', (req, res) => {
  res.render('sqa');
});

router.get('/student-welcome', (req, res) => {
  res.render('student-welcome');
});


module.exports = router;
