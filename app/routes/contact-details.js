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


router.post('/app/contact-details/round-2/scenario-2/which-phone', function (req, res) {
  let answer = req.body.whichPhone;

  if (answer === 'differentPhone') {

    res.redirect('/app/contact-details/round-2/scenario-2/enter-password')

  } else {
    res.redirect('/app/contact-details/round-2/scenario-2/phone-updated')
  }


});


router.post('/app/contact-details/round-2/scenario-3/which-email', function (req, res) {
  let answer = req.body.whichEmail;

  if (answer === 'gp') {

    res.redirect('/app/contact-details/round-2/scenario-3/enter-new-gp-email')

  } else {
    res.redirect('/app/contact-details/round-2/scenario-3/enter-new-login-email')
  }


});



router.post('/app/contact-details/round-3/scenario-1/which-email', function (req, res) {
  let answer = req.body.whichEmail;

  if (answer === 'differentEmail') {

    res.redirect('/app/contact-details/round-3/scenario-1/enter-new-email')

  } else {
    res.redirect('/app/contact-details/round-3/scenario-1/email-updated')
  }


});



router.post('/app/contact-details/round-3/scenario-2/which-phone', function (req, res) {
  let answer = req.body.whichPhone;

  if (answer === 'differentPhone') {

    res.redirect('/app/contact-details/round-3/scenario-2/enter-password')

  } else {
    res.redirect('/app/contact-details/round-3/scenario-2/phone-updated')
  }


});



router.post('/app/contact-details/round-3/scenario-3/which-email', function (req, res) {
  let answer = req.body.whichEmail;

  if (answer === 'gp') {

    res.redirect('/app/contact-details/round-3/scenario-3/enter-new-gp-email')

  } else {
    res.redirect('/app/contact-details/round-3/scenario-3/enter-new-login-email')
  }


});





router.post('/app/contact-details/option-c/scenario-1/which-email', function (req, res) {
  let answer = req.body.whichEmail;

  if (answer === 'differentEmail') {

    res.redirect('/app/contact-details/option-c/scenario-1/enter-new-email')

  } else {
    res.redirect('/app/contact-details/option-c/scenario-1/email-updated')
  }


});



router.post('/app/contact-details/option-c/scenario-2/which-phone', function (req, res) {
  let answer = req.body.whichPhone;

  if (answer === 'differentPhone') {

    res.redirect('/app/contact-details/option-c/scenario-2/enter-password')

  } else {
    res.redirect('/app/contact-details/option-c/scenario-2/phone-updated')
  }


});











module.exports = router;
