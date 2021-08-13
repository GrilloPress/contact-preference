const express = require('express');
const router = express.Router();
var moment = require('moment');


router.post('/app/contact-details/v2/which-email', function (req, res) {
  let answer = req.body.whichEmail;

  if (answer === 'differentEmail') {

    res.redirect('/app/contact-details/v2/update-login')

  } else {
    res.redirect('/app/contact-details/v2/email-updated')
  }


});


router.post('/app/contact-details/round-2/scenario-1/which-email', function (req, res) {
  let answer = req.body.whichEmail;

  if (answer === 'differentEmail') {

    res.redirect('/app/contact-details/round-2/scenario-1/enter-new-email')

  } else {
    res.redirect('/app/contact-details/round-2/scenario-1/email-updated')
  }


});









module.exports = router;
