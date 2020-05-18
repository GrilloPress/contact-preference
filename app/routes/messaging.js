const express = require('express');
const router = express.Router();
var moment = require('moment');

router.get('/app/send-a-message/query', function (req, res) {

  console.log(req.query.name);
  let answer = req.query.name;
  req.session.data.to = answer;
  res.redirect('/app/send-a-message/your-message')

});

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






router.post('/app/send-a-message/v5/message-you-sent', function (req, res) {

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
  var query = "/app/send-a-message/v5/message?id=2&"
              + "from=" + req.session.data.msgFrom + "&"
              + "sent=" + req.session.data.msgDate + "&"
              + "time=" + req.session.data.msgTime + "&"
              + "body=" + req.session.data.msgBody + "&"
              + "subject" + req.session.data.msgSubject + "&"
              + "to=" + "True" + "&"
              + "messageRead2=" + "read" + "&"
  res.redirect(query)

});

router.post('/app/send-a-message/v5/send-a-message-radio', function (req, res) {
  let answer = req.body.urgentAdvice;

  if (answer === 'yes') {

    res.redirect('/app/send-a-message/v5/contact-your-gp')

  } else {
    res.redirect('/app/send-a-message/v5/select-who')
  }
});

router.post('/app/send-a-message/v5/message-subject-radio', function (req, res) {
  let answer = req.body.subject;

  if (answer === 'Other') {

    res.redirect('/app/send-a-message/v5/message-subject')

  } else {
    res.redirect('/app/send-a-message/v5/send-a-message-radio')
  }
});

router.post('/app/send-a-message/v5/file/check-file', function (req, res) {
  let answer = req.body.checkFile;

  if (answer === 'yes') {

    req.session.data.fileAdded = "true";
    res.redirect('/app/send-a-message/v5/your-message')

  } else {
    // req.session.data.fileAdded = "false";
    res.redirect('/app/send-a-message/v5/file/add-file')
  }
});




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


module.exports = router;
