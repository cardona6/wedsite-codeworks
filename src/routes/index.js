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
module.exports = router;
