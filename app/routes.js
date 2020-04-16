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
  res.redirect('/app/prescriptions/v1/confirmed-3')

});

// prescriptions v2


router.post('/app/prescriptions/v2/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v2/confirmed')

});


// prescriptions v3


router.post('/app/prescriptions/v3/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v3/confirmed')

});


// prescriptions v4


router.post('/app/prescriptions/v4/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v4/confirmed-3')

});

// prescriptions v5


router.post('/app/prescriptions/v5/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v5/confirmed-3')

});


// prescriptions v6


router.post('/app/prescriptions/v6/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v6/confirmed-3')

});

// prescriptions v7


router.post('/app/prescriptions/v7/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v7/confirmed-3')

});


// prescriptions v7


router.post('/app/prescriptions/v7/proxy/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v7/proxy/confirmed')

});





router.post('/app/prescriptions/v4/nominate-interrupt', function (req, res) {
  let answer = req.body.nominateInterrupt;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v4/card-nom-pharmacy-2')

  } else {
    res.redirect('/app/prescriptions/v4/confirm-prescription-5')
  }
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
  res.redirect('/app/v4/start')

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

router.post('/app/send-a-message/v2/message-you-sent', function (req, res) {

  // get

  req.session.data.msgTrue = "True";
  req.session.data.msgDate = "today";
  req.session.data.msgTime = moment().format("h:mma");
  req.session.data.msgBody = req.body.msgBody;
  req.session.data.msgFrom = req.session.data.msgTo;
  // req.session.data.msgTo = "True";
  // id
  // from
  // req.body.checkMobile

  // then build query string for messaging/v1/message
  // /{{ PROTOTYPEURL }}/your-message?msgTo=Woodrow GP Practice
  // message?id=1&from=Leanna Leveille&sent=Yesterday&time=4.55pm&body=Please arrange for an appointment with a nurse for a blood test
  var query = "/app/send-a-message/v2/message?id=2&"
              + "from=" + req.session.data.msgFrom + "&"
              + "sent=" + req.session.data.msgDate + "&"
              + "time=" + req.session.data.msgTime + "&"
              + "body=" + req.session.data.msgBody + "&"
              + "to=" + "True" + "&"
              + "messageRead2=" + "read" + "&"
  res.redirect(query)

});

router.post('/app/send-a-message/v2/send-a-message-radio', function (req, res) {
  let answer = req.body.urgentAdvice;

  if (answer === 'yes') {

    res.redirect('/app/send-a-message/v2/contact-your-gp')

  } else {
    res.redirect('/app/send-a-message/v2/select-who')
  }
});

router.post('/app/send-a-message/v3/message-you-sent', function (req, res) {

  // get

  req.session.data.msgTrue = "True";
  req.session.data.msgDate = "today";
  req.session.data.msgTime = moment().format("h:mma");
  req.session.data.msgBody = req.body.msgBody;
  req.session.data.msgSender = req.session.data.sender
  req.session.data.msgFrom = req.session.data.msgTo;
  // req.session.data.msgTo = "True";
  // id
  // from
  // req.body.checkMobile

  // then build query string for messaging/v1/message
  // /{{ PROTOTYPEURL }}/your-message?msgTo=Woodrow GP Practice
  // message?id=1&from=Leanna Leveille&sent=Yesterday&time=4.55pm&body=Please arrange for an appointment with a nurse for a blood test
  var query = "/app/send-a-message/v3/message?id=2&"
              + "from=" + req.session.data.msgFrom + "&"
              + "sent=" + req.session.data.msgDate + "&"
              + "time=" + req.session.data.msgTime + "&"
              + "body=" + req.session.data.msgBody + "&"
              + "subject" + req.session.data.msgSubject + "&"
              + "to=" + "True" + "&"
              + "messageRead2=" + "read" + "&"
  res.redirect(query)

});

router.post('/app/send-a-message/v4/message-you-sent', function (req, res) {

  // get

  req.session.data.msgTrue = "True";
  req.session.data.msgDate = "today";
  req.session.data.msgTime = moment().format("h:mma");
  req.session.data.msgBody = req.body.msgBody;
  req.session.data.msgSender = req.session.data.sender
  req.session.data.msgFrom = req.session.data.msgTo;
  // req.session.data.msgTo = "True";
  // id
  // from
  // req.body.checkMobile

  // then build query string for messaging/v1/message
  // /{{ PROTOTYPEURL }}/your-message?msgTo=Woodrow GP Practice
  // message?id=1&from=Leanna Leveille&sent=Yesterday&time=4.55pm&body=Please arrange for an appointment with a nurse for a blood test
  var query = "/app/send-a-message/v4/message?id=2&"
              + "from=" + req.session.data.msgFrom + "&"
              + "sent=" + req.session.data.msgDate + "&"
              + "time=" + req.session.data.msgTime + "&"
              + "body=" + req.session.data.msgBody + "&"
              + "subject" + req.session.data.msgSubject + "&"
              + "to=" + "True" + "&"
              + "messageRead2=" + "read" + "&"
  res.redirect(query)

});

router.post('/app/send-a-message/v3/send-a-message-radio', function (req, res) {
  let answer = req.body.urgentAdvice;

  if (answer === 'yes') {

    res.redirect('/app/send-a-message/v3/contact-your-gp')

  } else {
    res.redirect('/app/send-a-message/v3/select-who')
  }
});

router.post('/app/send-a-message/v4/send-a-message-radio', function (req, res) {
  let answer = req.body.urgentAdvice;

  if (answer === 'yes') {

    res.redirect('/app/send-a-message/v4/contact-your-gp')

  } else {
    res.redirect('/app/send-a-message/v4/select-who')
  }
});

router.post('/app/send-a-message/v4/message-subject-radio', function (req, res) {
  let answer = req.body.subject;

  if (answer === 'Other') {

    res.redirect('/app/send-a-message/v4/message-subject')

  } else {
    res.redirect('/app/send-a-message/v4/send-a-message-radio')
  }
});

router.post('/app/send-a-message/v4/file/check-file', function (req, res) {
  let answer = req.body.checkFile;

  if (answer === 'yes') {

    req.session.data.fileAdded = "true";
    res.redirect('/app/send-a-message/v4/your-message')

  } else {
    // req.session.data.fileAdded = "false";
    res.redirect('/app/send-a-message/v4/file/add-file')
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


// Add your routes here - above the module.exports line



// SEND A PATIENT ROUTES

router.post('/send-a-patient-a-message/v2/create/sender/from', function (req, res) {
  let answer = req.body.senderFrom;
  if (answer == "yes") {
    // set senderFrom to senderDisplayName
    req.session.data.senderDisplayName = req.session.data.ODS;
    res.redirect('/send-a-patient-a-message/v2/create/sender/check-your-answers')
    // redirect to check your answers
  } else {
    // redirect to new sender name
    res.redirect('/send-a-patient-a-message/v2/create/sender/new-sender-name')
  }
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


// Nominated pharmacy routing


router.post('/app/nominated-pharmacy/v1/type-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyType;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v1/find-community-pharmacy')

  } else {
    res.redirect('/app/nominated-pharmacy/v1/name-of-pharmacy')
  }
});



router.post('/app/nominated-pharmacy/v4/type-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyType;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v4/find-community-pharmacy')

  } else {
    res.redirect('/app/nominated-pharmacy/v4/online-interrupt')
  }
});



router.post('/app/nominated-pharmacy/v4/type-of-pharmacy-no-online', function (req, res) {
  let answer = req.body.pharmacyTypeOnline;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v4/find-community-pharmacy')

  } else {
    res.redirect('/app/nominated-pharmacy/v4/online-register-directly')
  }
});






router.post('/app/nominated-pharmacy/v1/name-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyName;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v1/search-name')

  } else {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    theRoll = getRandomInt(2);

      if (theRoll == 0) {

        res.redirect('/app/nominated-pharmacy/v1/online-results')

      } else {

        res.redirect('/app/nominated-pharmacy/v1/online-results-2')

      }

  }
});


router.post('/app/nominated-pharmacy/v1/nominate-a-pharmacy', function (req, res) {
  let answer = req.body.nominatePharmacy;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v1/find-community-pharmacy-nom')

  } else {
    res.redirect('/app/nominated-pharmacy/v1/name-of-pharmacy-nom')
  }
});

router.post('/app/nominated-pharmacy/v1/name-of-pharmacy-nom', function (req, res) {
  let answer = req.body.pharmacyNameNom;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v1/search-name-nom')

  } else {
    res.redirect('/app/nominated-pharmacy/v1/online-results-nom')
  }
});


router.post('/app/nominated-pharmacy/v2/type-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyType;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v2/find-community-pharmacy')

  } else {
    res.redirect('/app/nominated-pharmacy/v2/name-of-pharmacy')
  }
});

router.post('/app/nominated-pharmacy/v2/name-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyName;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v2/search-name')

  } else {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    theRoll = getRandomInt(2);

      if (theRoll == 0) {

        res.redirect('/app/nominated-pharmacy/v2/online-results')

      } else {

        res.redirect('/app/nominated-pharmacy/v2/online-results-2')

      }

  }
});


router.post('/app/nominated-pharmacy/v3/type-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyType;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v3/find-community-pharmacy')

  } else {
    res.redirect('/app/nominated-pharmacy/v3/name-of-pharmacy')
  }
});

router.post('/app/nominated-pharmacy/v3/name-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyName;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v3/search-name')

  } else {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    theRoll = getRandomInt(2);

      if (theRoll == 0) {

        res.redirect('/app/nominated-pharmacy/v3/online-results')

      } else {

        res.redirect('/app/nominated-pharmacy/v3/online-results-2')

      }

  }
});


router.post('/app/nominated-pharmacy/v4/name-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyName;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v4/search-name')

  } else {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    theRoll = getRandomInt(2);

      if (theRoll == 0) {

        res.redirect('/app/nominated-pharmacy/v4/online-results')

      } else {

        res.redirect('/app/nominated-pharmacy/v4/online-results-2')

      }

  }
});

// Appointment ROUTES

router.post('/app/appointments/v5/select-how-to-search', function (req, res) {
  let answer = req.body.appointmentSearchMethod;

  if (answer === 'search') {

    res.redirect('/app/appointments/v5/select-type-of-appointment?browseAppointments=false')



  } else {
    res.redirect('/app/appointments/v5/select-available-appointment?browseAppointments=true&appointmentType=')
  }
});

router.post('/app/appointments/v4/select-how-to-search', function (req, res) {
  let answer = req.body.appointmentSearchMethod;

  if (answer === 'search') {

    res.redirect('/app/appointments/v4/select-location?browseAppointments=false')



  } else {
    res.redirect('/app/appointments/v4/select-available-appointment?browseAppointments=true&appointmentType=')
  }
});

router.post('/app/appointments/v4/radio-practice-member-answer', function (req, res) {
  let answer = req.body.appointmentChoiceStaff;

  if (answer === 'yes') {

    res.redirect('/app/appointments/v4/select-practice-member')

  } else {
    res.redirect('/app/appointments/v4/select-available-appointment?appointmentMember=')
  }
});

router.post('/app/appointments/v6/select-how-to-search', function (req, res) {
  let answer = req.body.appointmentSearchMethod;

  if (answer === 'search') {

    res.redirect('/app/appointments/v6/select-location?browseAppointments=false')



  } else {
    res.redirect('/app/appointments/v6/select-available-appointment?browseAppointments=true&appointmentType=')
  }
});

router.post('/app/appointments/v6/radio-practice-member-answer', function (req, res) {
  let answer = req.body.appointmentChoiceStaff;

  if (answer === 'yes') {

    res.redirect('/app/appointments/v6/select-practice-member')

  } else {
    res.redirect('/app/appointments/v6/select-available-appointment?appointmentMember=')
  }
});

// NHSUK ROUTES

router.post('/nhsuk-to-prescription/nhsuk/england', function (req, res) {
  let answer = req.body.england;

  if (answer === 'not sure') {

    res.redirect('/nhsuk-to-prescription/nhsuk/england-not-sure')

  } else if (answer === 'no') {

    res.redirect('/nhsuk-to-prescription/nhsuk/england-no')

  } else {
    res.redirect('/nhsuk-to-prescription/nhsuk/has-prescription')
  }
});

router.post('/nhsuk-to-prescription/nhsuk/has-prescription', function (req, res) {
  let answer = req.body.hasPrescription;

  if (answer === 'no') {

    res.redirect('/nhsuk-to-prescription/nhsuk/has-prescription-no')

  } else {
    res.redirect('/nhsuk-to-prescription/nhsuk/frequency')
  }
});

router.post('/nhsuk-to-prescription/nhsuk/frequency', function (req, res) {
  let answer = req.body.frequency;

  if (answer === 'once a year') {

    res.redirect('/nhsuk-to-prescription/nhsuk/frequency-no')

  } else {

    var env = (process.env.NODE_ENV || 'development').toLowerCase()

    if (env === 'production'){

      res.redirect('https://nhs-cid.herokuapp.com/create-account/v19/login-nhs?service=app5&serviceName=the%20NHS%20app&lsId=undefined&lsAccess=undefined&lsStudy=undefined&emailAddress=undefined&hidehead=undefined&devMode=undefined&returnUrl=https://nhs-contact.herokuapp.com/nhsuk-to-prescription/app/prescriptions-landing')

    } else {

      res.redirect('https://nhs-cid.herokuapp.com/create-account/v19/login-nhs?service=app5&serviceName=the%20NHS%20app&lsId=undefined&lsAccess=undefined&lsStudy=undefined&emailAddress=undefined&hidehead=undefined&devMode=undefined&returnUrl=http://localhost:2001/nhsuk-to-prescription/app/prescriptions-landing')

    }




  }
});

router.post('/app/appointments/v6/select-how-to-search', function (req, res) {
  let answer = req.body.appointmentSearchMethod;

  if (answer === 'search') {

    res.redirect('/app/appointments/v6/select-type-of-appointment?browseAppointments=false')



  } else {
    res.redirect('/app/appointments/v6/select-available-appointment?browseAppointments=true&appointmentType=')
  }
});

router.post('/app/appointments/v5/radio-practice-member-answer', function (req, res) {
  let answer = req.body.appointmentChoiceStaff;

  if (answer === 'yes') {

    res.redirect('/app/appointments/v5/select-practice-member')

  } else {
    res.redirect('/app/appointments/v5/select-available-appointment?appointmentMember=')
  }
});

router.post('/app/appointments/v6/radio-practice-member-answer', function (req, res) {
  let answer = req.body.appointmentChoiceStaff;

  if (answer === 'yes') {

    res.redirect('/app/appointments/v6/select-practice-member')

  } else {
    res.redirect('/app/appointments/v6/select-available-appointment?appointmentMember=')
  }
});



// OLC

router.post('/app/engage/med/v1/health-info-check', function (req, res) {
  let answer = req.body.engageHealthInfoCheck;

  if (answer === 'yes') {

    res.redirect('/app/engage/med/v1/health-info')

  } else {
    res.redirect('/app/engage/med/v1/check-answers')
  }
});


/// Terms accepted

// admin
router.post('/app/engage/admin/v1/terms/engage-medical', function (req, res) {
  let answer = req.session.data.engagePrivacyPolicy;

  if (answer === 'true') {

    res.redirect('/app/engage/admin/v1/telephone')

  } else {
    res.redirect('/app/engage/admin/v1/terms/engage-privacy')
  }
});

// admin
router.post('/app/engage/admin/v1/terms/engage-medical-111', function (req, res) {
  let answer = req.session.data.engagePrivacyPolicy;

  if (answer === 'true') {

    res.redirect('/app/engage/admin/v1/telephone')

  } else {
    res.redirect('/app/engage/admin/v1/terms/engage-privacy')
  }
});

// medical
router.post('/app/engage/terms/v1/engage-medical', function (req, res) {
  let answer = req.session.data.engagePrivacyPolicy;

  if (answer === 'true') {

    res.redirect('/app/engage/premed/v1/telephone')

  } else {
    res.redirect('/app/engage/terms/v1/engage-privacy')
  }
});

// medical 111 style
router.post('/app/engage/terms/v1/engage-medical-111', function (req, res) {
  let answer = req.session.data.engagePrivacyPolicy;

  if (answer === 'true') {

    res.redirect('/app/engage/premed/v1/telephone')

  } else {
    res.redirect('/app/engage/terms/v1/engage-privacy')
  }
});

// medical
router.post('/app/engage/terms/v1/nhs-login', function (req, res) {
  let answer = req.session.data.engageLoginAccepted;

  if (answer === 'true') {

    res.redirect('/app/engage/who/v1/index')

  } else {
    res.redirect('/app/engage/terms/v1/nhs-login')
  }
});


// admin
router.post('/app/engage/admin/v1/terms/nhs-login', function (req, res) {
  let answer = req.session.data.engageLoginAccepted;

  if (answer === 'true') {

    res.redirect('/app/engage/admin/v1/who/index')

  } else {
    res.redirect('/app/engage/admin/v1/terms/nhs-login')
  }
});


// ERROR privacy

router.post('/app/engage/terms/v1/engage-privacy', function (req, res) {
  let answer = req.body.engagePrivacyPolicy;

  if (answer === 'true') {

    res.redirect('/app/engage/premed/v1/telephone')

  } else {
    res.redirect('/app/engage/terms/v1/engage-privacy-error')
  }
});





module.exports = router;
