const express = require('express');
const router = express.Router();
var moment = require('moment');





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




module.exports = router;
