// External dependencies
const express = require('express');
const router = express.Router();

// HOW WOULD YOU PREFER TO BE CONTACTED?

router.post('/app/v2/prefer-to-be-contacted', function (req, res) {
  let answer = req.body.contactPreference;

  if (answer === 'letter') {

    res.redirect('/app/v2/letter/')

  } else if (answer === 'phonecall') {

    res.redirect('/app/v2/phone/')

  } else if (answer === 'email') {

    res.redirect('/app/v2/email/')

  } else if (answer === 'text') {

    res.redirect('/app/v2/text/')

  } else if (answer === 'pushNotification') {

    res.redirect('/app/v2/push/')

  } else if (answer === 'other') {

    res.redirect('/app/v2/other/')

  } else {
    res.redirect('/app/v2/no-preference/')
  }
});

// OTHER

router.post('/app/v2/other/reminder-preference', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'email') {

    res.redirect('/app/v2/other/email')

  } else if (answer === 'text') {

    res.redirect('/app/v2/other/text')

  } else {
    res.redirect('/app/v2/other/push/allow')
  }
});

router.post('/app/v2/other/text/', function (req, res) {
  let answer = req.body.checkMobile;

  if (answer === 'yes') {

    res.redirect('/app/v2/other/your-answers')

  } else {
    res.redirect('/app/v2/other/text/mobile')
  }
});

router.post('/app/v2/other/email/', function (req, res) {
  let answer = req.body.checkEmail;

  if (answer === 'yes') {

    res.redirect('/app/v2/other/your-answers')

  } else {
    res.redirect('/app/v2/other/email/email')
  }
});


// Add your routes here - above the module.exports line

module.exports = router;
