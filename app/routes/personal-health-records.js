const express = require('express');
const router = express.Router();
var moment = require('moment');



router.post('/app/appointments/v10-substrakt/ask-gp-a-question/recently-had', function (req, res) {
  let answer = req.body.recentlyHad;

  if (answer === 'yes') {

    res.redirect('/app/appointments/v10-substrakt/ask-gp-a-question/end-date')

  } else {
    res.redirect('/app/appointments/v10-substrakt/ask-gp-a-question/start-date')
  }
});





module.exports = router;
