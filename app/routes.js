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

// // // //
// POSTAL ADDRESS
// // // //

router.post('/app/v2/letter/', function (req, res) {
  let answer = req.body.checkAddress;

  if (answer === 'yes') {

    res.redirect('/app/v2/letter/reminders')

  } else {
    res.redirect('/app/v2/letter/address/')
  }
});

router.post('/app/v2/letter/reminders', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'text') {

    res.redirect('/app/v2/letter/reminders/text')

  } else if (answer === 'email') {

    res.redirect('/app/v2/letter/reminders/email')

  } else {

    res.redirect('/app/v2/letter/reminders/push/allow')
  }
});

router.post('/app/v2/letter/reminders/email/', function (req, res) {
  let answer = req.body.checkEmail;

  if (answer === 'yes') {

    res.redirect('/app/v2/letter/your-answers')

  } else {
    res.redirect('/app/v2/letter/reminders/email/email')
  }
});

router.post('/app/v2/letter/reminders/text/', function (req, res) {
  let answer = req.body.checkMobile;

  if (answer === 'yes') {

    res.redirect('/app/v2/letter/your-answers')

  } else {
    res.redirect('/app/v2/letter/reminders/text/mobile')
  }
});

// // // //
// TEXT MESSAGE
// // // //

router.post('/app/v2/text/', function (req, res) {
  let answer = req.body.checkMobile;

  if (answer === 'yes') {

    res.redirect('/app/v2/text/reminders')

  } else {
    res.redirect('/app/v2/text/mobile')
  }
});

router.post('/app/v2/text/reminders/', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'text message') {

    res.redirect('/app/v2/text/your-answers')

  } else {
    res.redirect('/app/v2/text/reminders/choose')
  }
});

router.post('/app/v2/text/reminders/choose', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'email') {

    res.redirect('/app/v2/text/reminders/email/')

  } else {
    res.redirect('/app/v2/text/reminders/push/allow')
  }
});

router.post('/app/v2/text/reminders/email/', function (req, res) {
  let answer = req.body.checkEmail;

  if (answer === 'yes') {

    res.redirect('/app/v2/text/your-answers')

  } else {
    res.redirect('/app/v2/text/reminders/email/email')
  }
});

// // // //
// PUSH
// // // //

router.post('/app/v2/push/reminders', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'pushNotification') {

    res.redirect('/app/v2/push/your-answers')

  } else {
    res.redirect('/app/v2/push/reminders/choose')
  }
});

router.post('/app/v2/push/reminders/choose', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'text') {

    res.redirect('/app/v2/push/reminders/text/')

  } else {
    res.redirect('/app/v2/push/reminders/email')
  }
});

router.post('/app/v2/push/reminders/email/', function (req, res) {
  let answer = req.body.checkEmail;

  if (answer === 'yes') {

    res.redirect('/app/v2/push/your-answers')

  } else {
    res.redirect('/app/v2/push/reminders/email/email')
  }
});

router.post('/app/v2/push/reminders/text/', function (req, res) {
  let answer = req.body.checkMobile;

  if (answer === 'yes') {

    res.redirect('/app/v2/push/your-answers')

  } else {
    res.redirect('/app/v2/push/reminders/text/mobile')
  }
});

// // // //
// EMAIL
// // // //

router.post('/app/v2/email/', function (req, res) {
  let answer = req.body.checkEmail;

  if (answer === 'yes') {

    res.redirect('/app/v2/email/reminders')

  } else {
    res.redirect('/app/v2/email/email')
  }
});

router.post('/app/v2/email/reminders/', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'yes') {

    res.redirect('/app/v2/email/your-answers')

  } else {
    res.redirect('/app/v2/email/reminders/choose')
  }
});

router.post('/app/v2/email/reminders/choose', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'text') {

    res.redirect('/app/v2/email/reminders/text/')

  } else {
    res.redirect('/app/v2/email/reminders/push/allow')
  }
});

router.post('/app/v2/email/reminders/text/', function (req, res) {
  let answer = req.body.checkMobile;

  if (answer === 'yes') {

    res.redirect('/app/v2/email/your-answers')

  } else {
    res.redirect('/app/v2/email/reminders/text/mobile')
  }
});


// // // //
// NO PREFERENCE
// // // //

router.post('/app/v2/no-preference/', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'yes') {

    res.redirect('/app/v2/no-preference/appointment-reminders')

  } else {
    res.redirect('/app/v2/no-preference/your-answers')
  }
});

router.post('/app/v2/no-preference/appointment-reminders', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'email') {

    res.redirect('/app/v2/no-preference/email')

  } else if (answer === 'text') {

    res.redirect('/app/v2/no-preference/text')

  } else {
    res.redirect('/app/v2/no-preference/push/allow')
  }
});

router.post('/app/v2/no-preference/text/', function (req, res) {
  let answer = req.body.checkMobile;

  if (answer === 'yes') {

    res.redirect('/app/v2/no-preference/your-answers')

  } else {
    res.redirect('/app/v2/no-preference/text/mobile')
  }
});

router.post('/app/v2/no-preference/email/', function (req, res) {
  let answer = req.body.checkEmail;

  if (answer === 'yes') {

    res.redirect('/app/v2/no-preference/your-answers')

  } else {
    res.redirect('/app/v2/no-preference/email/email')
  }
});

// // // // //
// OTHER
// // // // //


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
