const express = require('express');
const router = express.Router();
var moment = require('moment');


router.post('/app/contact-details/v2/which-email', function (req, res) {
  let answer = req.body.whichEmail;

  if (answer === 'loginEmail') {

    res.redirect('/app/contact-details/v2/email-updated')

  } else {
    res.redirect('/app/contact-details/v2/update-login')
  }
});





module.exports = router;
