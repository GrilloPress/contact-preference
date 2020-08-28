// External dependencies
const express = require('express');
const router = express.Router();
var moment = require('moment');

////////   IMPORTANT  /////////////////////////////////////////////////////////////////
//
//           !Your routes have moved!
//    ____
//  ( ._.)   messaging is in /routes/messaging.js
//   ≤||≥
//   _/\_    engage, eConsult, doctorlink routes are in /routes/consultations.js
//
//           prescriptions and nominated pharmacy routes are in /routes/prescriptions.js
//
//           appointments routes are in /routes/appointments.js
//
//
/////////////////////////////////////////////////////////////////////////////////////

////// INCLUDE OTHER ROUTES FILES FROM THE ROUTES FOLDER

router.use('/', require('./routes/appointments.js'))
router.use('/', require('./routes/consultations.js'))
router.use('/', require('./routes/contact-preferences.js'))
router.use('/', require('./routes/messaging.js'))
router.use('/', require('./routes/prescriptions.js'))

/////////////////////////////////////////////////////////////////////////////////////



// proxy

router.post('/app/linked-profiles/switch-profile', function (req, res) {

req.session.data.switchProfile = "true"
res.redirect('/app/linked-profiles/proxy-home-2?routePrescriptions=/app/prescriptions/v7/proxy/your-prescriptions&routeHome=/app/linked-profiles/proxy-home-2&proxy=true')

});


// homepage


router.post('/app/homepage/biometric-message-2', function (req, res) {
  let answer = req.body.biometric;

  if (answer === 'yes') {

    res.redirect('/app/settings/v1/password-2')

  } else {
    res.redirect('/app/v3/')
  }
});


router.post('/app/settings/v1/logout', function (req, res) {

  req.session.data = {}
  res.redirect('/app/start')

});

router.post('/app/settings/v3/logout', function (req, res) {

  req.session.data = {}
  res.redirect('/app/start')

});



router.post('/app/more/experimental', function (req, res) {

  req.session.data = {}
  res.redirect('/app/v7/start')

});

router.post('/app/more/experimental/index-2', function (req, res) {

  req.session.data = {}
  res.redirect('/app/v8/start')

});

router.get('/app/v8/clear', function (req, res) {

  req.session.data = {}
  res.redirect('/app/v8/start')

});


router.get('/app/v8/clear-desktop', function (req, res) {

  req.session.data = {}
  res.redirect('/app/logged-out-homescreen/download-app')

});


router.get('/app/v9/clear', function (req, res) {

  req.session.data = {}
  res.redirect('/app/v9/start')

});


router.get('/app/v9/clear-desktop', function (req, res) {

  req.session.data = {}
  res.redirect('/app/logged-out-homescreen/download-app')

});
// qualtrics message


router.post('/app/homepage/qualtrics-message', function (req, res) {
  let answer = req.body.qualtrics;

  if (answer === 'yes') {

    res.redirect('/app/homepage/qualtrics-email')

  } else {
    res.redirect('/app/v4/')
  }
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

router.post('/app/settings/cookie', function (req, res) {
  let answer = req.body.cookie;
  if (answer == "on") {
    req.session.data.cookie = "on";
  } else {
    req.session.data.cookie = "off";
  }
  res.redirect('/app/cookie')
});


// P5


function emailLinkRoute(req, res, next) {
  if (!req.session.data['emailLink']) {
    // console.log('no data found');
    var emailLink = req.query.emailLink;
    if (emailLink === 'true') {
      // console.log('emailLink detected');
      req.session.data['emailLink'] = 'true'
      // console.log('local storage updated');
    } else {
      // console.log('emailLink not detected');
    }
  } else {
    // console.log('data found and set to ' + req.session.data['emailLink'])
  }
  next()
}
router.get("/*", emailLinkRoute);


router.post('/app/p5/terms', function (req, res) {

  req.session.data.terms = "True"
  res.redirect('/app/homepage/qualtrics-message?messageRead1=read&cookies=on&routeHome=/app/p5/home&routeSymptoms=/app/symptoms/v3/index&routeAppointments=/app/appointments/v6/p5-appointments&routePrescriptions=/app/prescriptions/v7/p5-prescriptions&routeMore=/app/more/p5-more&routeRecords=/app/records/v2/p5-records&routeMessaging=/app/messaging/v3/messages-none&messagingIcon=False&linkedProfiles=False&p5=True&econsult=False&manageLogin=False')

});


// Organ donation routing

router.post('/app/organ-donation/v1/your-choice', function (req, res) {
  let answer = req.body.yourChoice;

  if (answer === 'all') {

    res.redirect('/app/organ-donation/v1/faith-beliefs')

  } else {
    res.redirect('/app/organ-donation/v1/which-organs')
  }
});

router.post('/app/organ-donation/v2/your-choice', function (req, res) {
  let answer = req.body.yourChoice;

  if (answer === 'all') {

    res.redirect('/app/organ-donation/v2/faith-beliefs')

  } else {
    res.redirect('/app/organ-donation/v2/which-organs')
  }
});


router.post('/app/organ-donation/v2/change-radios', function (req, res) {
  let answer = req.body.changeRadios;

  if (answer === 'yesDonate') {

    res.redirect('/app/organ-donation/v2/your-choice?donationDecision=yes')

  } else if (answer === 'noDonate') {

    res.redirect('/app/organ-donation/v2/additional-details?donationDecision=no&yourChoice=')

  } else {
    res.redirect('/app/organ-donation/v2/reason-for-withdraw')
  }
});


//////   IMPORTANT  /////////////////////////////////////////////////////////////////
//
//           !Your routes have moved!
//    ____
//  ( ._.)   messaging is in /routes/messaging.js
//   ≤||≥
//   _/\_    engage, eConsult, doctorlink routes are in /routes/consultations.js
//
//           prescriptions and nominated pharmacy routes are in /routes/prescriptions.js
//
//           appointments routes are in /routes/appointments.js
//
//
/////////////////////////////////////////////////////////////////////////////////////


// user research redirect

// router.get('/', function (req, res) {
//
//   res.redirect('/app/iframe-3')
//
//  });


// router.get('/', function (req, res) {
//
//   req.session.data.ChildHub = "True"
//   res.redirect('/app/iframe')
//
//  });

// router.get('/task-two', function (req, res) {
//
//   req.session.data.ChildHub = "False"
//   res.redirect('/app/iframe-2')
//
// });

module.exports = router;
