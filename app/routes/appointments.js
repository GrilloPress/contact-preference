const express = require('express');
const router = express.Router();
var moment = require('moment');

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

module.exports = router;
