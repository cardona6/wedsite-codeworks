const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/media', (req, res) => {
  res.render('media');
});

module.exports = router;
