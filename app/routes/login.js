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




module.exports = router;
