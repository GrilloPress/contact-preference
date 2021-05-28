const express = require('express');
const router = express.Router();
var moment = require('moment');



// p5

router.post('/app/v10-p5/login/know-nhs-number', function (req, res) {
  let answer = req.body.knowNHSNumber;

  if (answer === 'yes') {

    res.redirect('/app/v10-p5/login/enter-nhs-number')

  } else {
    res.redirect('/app/v10-p5/login/enter-full-name')
  }
});



router.post('/app/v10-p5/login/registered-with-gp', function (req, res) {
  let answer = req.body.registeredWithGP;

  if (answer === 'yes') {

    res.redirect('/app/v10-p5/login/enter-email')

  } else {
    res.redirect('/app/v10-p5/login/where-do-you-live')
  }
});


router.post('/app/v10-p5/login/where-do-you-live', function (req, res) {
  let answer = req.body.whereLive;

  if (answer === 'england') {

    res.redirect('/app/v10-p5/login/england')

  } else if (answer === 'northernI') {

    res.redirect('/app/v10-p5/login/northern-ireland')

  } else if (answer === 'scotland') {

    res.redirect('/app/v10-p5/login/scotland')

  } else {
    res.redirect('/app/v10-p5/login/wales')
  }
});


// covid status p5 journey

router.post('/app/covid-status/new-user-flow/login/know-nhs-number', function (req, res) {
  let answer = req.body.knowNHSNumber;

  if (answer === 'yes') {

    res.redirect('/app/covid-status/new-user-flow/login/enter-date-of-birth')

  } else {
    res.redirect('/app/covid-status/new-user-flow/login/enter-full-name')
  }
});



router.post('/app/covid-status/new-user-flow/login/registered-with-gp', function (req, res) {
  let answer = req.body.registeredWithGP;

  if (answer === 'yes') {

    res.redirect('/app/covid-status/new-user-flow/login/enter-email')

  } else {
    res.redirect('/app/covid-status/new-user-flow/login/where-do-you-live')
  }
});


router.post('/app/covid-status/new-user-flow/login/where-do-you-live', function (req, res) {
  let answer = req.body.whereLive;

  if (answer === 'england') {

    res.redirect('/app/covid-status/new-user-flow/login/england')

  } else if (answer === 'northernI') {

    res.redirect('/app/covid-status/new-user-flow/login/northern-ireland')

  } else if (answer === 'scotland') {

    res.redirect('/app/covid-status/new-user-flow/login/scotland')

  } else {
    res.redirect('/app/covid-status/new-user-flow/login/wales')
  }
});


// covid status p5 domestic journey


router.post('/app/covid-status/p5-domestic-flow/login/know-nhs-number', function (req, res) {
  let answer = req.body.knowNHSNumber;

  if (answer === 'yes') {

    res.redirect('/app/covid-status/p5-domestic-flow/login/enter-date-of-birth')

  } else {
    res.redirect('/app/covid-status/p5-domestic-flow/login/enter-full-name')
  }
});



router.post('/app/covid-status/p5-domestic-flow/login/registered-with-gp', function (req, res) {
  let answer = req.body.registeredWithGP;

  if (answer === 'yes') {

    res.redirect('/app/covid-status/p5-domestic-flow/login/enter-email')

  } else {
    res.redirect('/app/covid-status/p5-domestic-flow/login/where-do-you-live')
  }
});


router.post('/app/covid-status/p5-domestic-flow/login/where-do-you-live', function (req, res) {
  let answer = req.body.whereLive;

  if (answer === 'england') {

    res.redirect('/app/covid-status/p5-domestic-flow/login/england')

  } else if (answer === 'northernI') {

    res.redirect('/app/covid-status/p5-domestic-flow/login/northern-ireland')

  } else if (answer === 'scotland') {

    res.redirect('/app/covid-status/p5-domestic-flow/login/scotland')

  } else {
    res.redirect('/app/covid-status/p5-domestic-flow/login/wales')
  }
});


module.exports = router;
