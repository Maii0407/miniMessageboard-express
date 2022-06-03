const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const messages = [{
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toString()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toString()
  }];

  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
