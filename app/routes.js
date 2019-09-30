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
// PHONE
// // // //

router.post('/app/v2/phone/', function (req, res) {
  let answer = req.body.checkPhone;

  if (answer === 'landline') {

    res.redirect('/app/v2/phone/reminders')

  } else if (answer === 'mobile') {

    res.redirect('/app/v2/phone/reminders')

  } else {
    res.redirect('/app/v2/phone/new/')
  }
});

router.post('/app/v2/phone/reminders', function (req, res) {
  let answer = req.body.appointReminders;

  if (answer === 'text') {

    res.redirect('/app/v2/phone/reminders/text')

  } else if (answer === 'email') {

    res.redirect('/app/v2/phone/reminders/email')

  } else {

    res.redirect('/app/v2/phone/reminders/push/allow')
  }
});

router.post('/app/v2/phone/reminders/email/', function (req, res) {
  let answer = req.body.checkEmail;

  if (answer === 'yes') {

    res.redirect('/app/v2/phone/your-answers')

  } else {
    res.redirect('/app/v2/phone/reminders/email/email')
  }
});

router.post('/app/v2/phone/reminders/text/', function (req, res) {
  let answer = req.body.checkMobile;

  if (answer === 'yes') {

    res.redirect('/app/v2/phone/your-answers')

  } else {
    res.redirect('/app/v2/phone/reminders/text/mobile')
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

router.get('/app/send-a-message/query', function (req, res) {

  console.log(req.query.name);
  let answer = req.query.name;
  req.session.data.to = answer;
  res.redirect('/app/send-a-message/your-message')

});

router.post('/app/prescriptions/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v1/confirmed')

});


var moment = require('moment');

router.post('/app/send-a-message/v1/message-you-sent', function (req, res) {

  // get

  req.session.data.msgTrue = "True";
  req.session.data.msgDate = "today";
  req.session.data.msgTime = moment().format("h:mm");
  req.session.data.msgBody = req.body.msgBody;
  req.session.data.msgFrom = req.session.data.msgTo;
  // req.session.data.msgTo = "True";
  // id
  // from
  // req.body.checkMobile

  // then build query string for messaging/v1/message
  // /{{ PROTOTYPEURL }}/your-message?msgTo=Woodrow GP Practice
  // message?id=1&from=Leanna Leveille&sent=Yesterday&time=4.55pm&body=Please arrange for an appointment with a nurse for a blood test
  var query = "/app/messaging/v1/message?id=2&"
              + "from=" + req.session.data.msgFrom + "&"
              + "sent=" + req.session.data.msgDate + "&"
              + "time=" + req.session.data.msgTime + "&"
              + "body=" + req.session.data.msgBody + "&"
              + "to=" + "True" + "&"
              + "messageRead2=" + "read" + "&"
  res.redirect(query)

});





// NHS App AJAX routes

router.post('/app/notifications', function (req, res) {
  let answer = req.body.notifications;
  if (answer == "on") {
    req.session.data.notifications = "True";
  } else {
    req.session.data.notifications = "False";
  }
  res.redirect('/app/notifications')
});

router.post('/app/password', function (req, res) {
  let answer = req.body.touchID;
  if (answer == "on") {
    req.session.data.touchID = "True";
  } else {
    req.session.data.touchID = "False";
  }
  res.redirect('/app/password')
});


// Add your routes here - above the module.exports line

module.exports = router;
