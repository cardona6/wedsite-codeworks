const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
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

router.get('/information-collegue', (req, res) => {
  res.render('information-collegue');
});

router.get('/our-performarce', (req, res) => {
  res.render('our-performarce');
});

router.get('/shors-courses', (req, res) => {
  res.render('shors-courses');
});

router.get('/student-charter', (req, res) => {
  res.render('student-charter');
});

router.get('/student-welcome', (req, res) => {
  res.render('student-welcome');
});


module.exports = router;
