const express = require('express');
const router = express.Router();

// Engage Consult routeSymptoms

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

////////////////////////////////////////////////////////////////////////////////
// ECONSULT routes
////////////////////////////////////////////////////////////////////////////////

router.post('/app/econsult/child/v1/3_covid', function (req, res) {
  let answer = req.session.data.econsultCOVID;

  if (answer === 'yes') {

    res.redirect('/app/econsult/child/v1/end/covid')

  } else {
    res.redirect('/app/econsult/child/v1/4_registered')
  }
});

router.post('/app/econsult/child/v1/2_emergency', function (req, res) {
  let answer = req.session.data.econsultEmergency;

  if (answer === 'yes') {

    res.redirect('/app/econsult/child/v1/end/emergency')

  } else {
    res.redirect('/app/econsult/child/v1/3_covid')
  }
});

router.post('/app/econsult/child/v1/4_registered', function (req, res) {
  let answer = req.session.data.econsultRegistered;

  if (answer === 'no') {

    res.redirect('/app/econsult/child/v1/end/registered')

  } else {
    res.redirect('/app/econsult/child/v1/5_your-dob')
  }
});

router.post('/app/econsult/child/v1/6_legal-guardian', function (req, res) {
  let answer = req.session.data.econsultLegalGuardian;

  if (answer === 'no') {

    res.redirect('/app/econsult/child/v1/end/legal-guardian')

  } else {
    res.redirect('/app/econsult/child/v1/7_childs-sex')
  }
});

router.post('/app/econsult/child/v1/11_', function (req, res) {
  let answer = req.session.data.econsultTriedAnything;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/11_a')

  } else {
    res.redirect('/app/econsult/child/v1/12_')
  }
});

router.post('/app/econsult/child/v1/12_', function (req, res) {
  let answer = req.session.data.econsultTrying;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/12_a')

  } else {
    res.redirect('/app/econsult/child/v1/13_')
  }
});

router.post('/app/econsult/child/v1/13_', function (req, res) {
  let answer = req.session.data.econsultTreatment;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/13_a')

  } else {
    res.redirect('/app/econsult/child/v1/14_')
  }
});

router.post('/app/econsult/child/v1/14_', function (req, res) {
  let answer = req.session.data.econsultParticularDr;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/14_a')

  } else {
    res.redirect('/app/econsult/child/v1/15_')
  }
});

router.post('/app/econsult/child/v1/15_', function (req, res) {
  let answer = req.session.data.econsultFever;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/end/fever')

  } else {
    res.redirect('/app/econsult/child/v1/16_')
  }
});

router.post('/app/econsult/child/v1/16_', function (req, res) {
  let answer = req.session.data.econsultHadItBefore;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/16_a')

  } else {
    res.redirect('/app/econsult/child/v1/17_')
  }
});

router.post('/app/econsult/child/v1/24_', function (req, res) {
  let answer = req.session.data.econsultObjectInEye;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/end/eye-object')

  } else {
    res.redirect('/app/econsult/child/v1/25_')
  }
});

router.post('/app/econsult/child/v1/25_', function (req, res) {
  let answer = req.session.data.econsultVisionChanges;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/end/vision')

  } else {
    res.redirect('/app/econsult/child/v1/26_')
  }
});

router.post('/app/econsult/child/v1/29_', function (req, res) {
  let answer = req.session.data.econsultPreviousSurgery;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/29_a')

  } else {
    res.redirect('/app/econsult/child/v1/30_')
  }
});

router.post('/app/econsult/child/v1/31_', function (req, res) {
  let answer = req.session.data.econsultRash;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/end/rash')

  } else {
    res.redirect('/app/econsult/child/v1/32_')
  }
});

router.post('/app/econsult/child/v1/32_', function (req, res) {
  let answer = req.session.data.econsultSick;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/32_a')

  } else {
    res.redirect('/app/econsult/child/v1/33_')
  }
});

router.post('/app/econsult/child/v1/32_a', function (req, res) {
  let answer = req.session.data.econsultSickDays;

  if (answer === 'More than 5 days') {

    res.redirect('/app/econsult/child/v1/end/rash')

  } else {
    res.redirect('/app/econsult/child/v1/32_b')
  }
});

router.post('/app/econsult/child/v1/32_b', function (req, res) {
  let answer = req.session.data.econsultSickTimesADay;

  if (answer === 'More than 5 times a day') {

    res.redirect('/app/econsult/child/v1/end/rash')

  } else {
    res.redirect('/app/econsult/child/v1/32_c')
  }
});

router.post('/app/econsult/child/v1/32_c', function (req, res) {
  let answer = req.session.data.econsultSickColour;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/end/rash')

  } else {
    res.redirect('/app/econsult/child/v1/33_')
  }
});

router.post('/app/econsult/child/v1/33_', function (req, res) {
  let answer = req.session.data.econsultDiarrhoea;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/33_a')

  } else {
    res.redirect('/app/econsult/child/v1/34_')
  }
});

router.post('/app/econsult/child/v1/33_a', function (req, res) {
  let answer = req.session.data.econsultDiarrhoeaDays;

  if (answer === 'More than 5 days') {

    res.redirect('/app/econsult/child/v1/end/rash')

  } else {
    res.redirect('/app/econsult/child/v1/33_b')
  }
});

router.post('/app/econsult/child/v1/33_b', function (req, res) {
  let answer = req.session.data.econsultDiarrhoeaTimesADay;

  if (answer === 'More than 5 times a day') {

    res.redirect('/app/econsult/child/v1/end/rash')

  } else {
    res.redirect('/app/econsult/child/v1/33_c')
  }
});

router.post('/app/econsult/child/v1/33_c', function (req, res) {
  let answer = req.session.data.econsultDiarrhoeaColour;

  if (answer === 'No') {

    res.redirect('/app/econsult/child/v1/34_')

  } else {
    res.redirect('/app/econsult/child/v1/end/rash')
  }
});


router.post('/app/econsult/child/v1/35_', function (req, res) {
  let answer = req.session.data.econsultSeenBefore;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/35_a')

  } else {
    res.redirect('/app/econsult/child/v1/36_')
  }
});

router.post('/app/econsult/child/v1/36_', function (req, res) {
  let answer = req.session.data.econsultAnythingElse;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/36_a')

  } else {
    res.redirect('/app/econsult/child/v1/37_')
  }
});

router.post('/app/econsult/child/v1/37_', function (req, res) {
  let answer = req.session.data.econsultSleepConcerns;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/37_a')

  } else {
    res.redirect('/app/econsult/child/v1/38_')
  }
});

router.post('/app/econsult/child/v1/38_', function (req, res) {
  let answer = req.session.data.econsultGrowthConcerns;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/38_a')

  } else {
    res.redirect('/app/econsult/child/v1/39_')
  }
});

router.post('/app/econsult/child/v1/39_', function (req, res) {
  let answer = req.session.data.econsultDevelopmentConcerns;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/39_a')

  } else {
    res.redirect('/app/econsult/child/v1/40_')
  }
});

router.post('/app/econsult/child/v1/41_', function (req, res) {
  let answer = req.session.data.econsultNursery;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/41_a')

  } else {
    res.redirect('/app/econsult/child/v1/42_')
  }
});

router.post('/app/econsult/child/v1/42_', function (req, res) {
  let answer = req.session.data.econsultSupportServices;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/42_a')

  } else {
    res.redirect('/app/econsult/child/v1/43_')
  }
});

router.post('/app/econsult/child/v1/44_', function (req, res) {
  let answer = req.session.data.econsultAllergic;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/44_a')

  } else {
    res.redirect('/app/econsult/child/v1/45_')
  }
});

router.post('/app/econsult/child/v1/45_', function (req, res) {
  let answer = req.session.data.econsultOtherMedical;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/45_a')

  } else {
    res.redirect('/app/econsult/child/v1/46_')
  }
});

router.post('/app/econsult/child/v1/46_', function (req, res) {
  let answer = req.session.data.econsultOtherDrugs;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/46_a')

  } else {
    res.redirect('/app/econsult/child/v1/47_')
  }
});

router.post('/app/econsult/child/v1/47_', function (req, res) {
  let answer = req.session.data.econsultFamilyHistory;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v1/47_a')

  } else {
    res.redirect('/app/econsult/child/v1/48_')
  }
});


// ADMIN ROUTES

router.post('/app/econsult/admin/v1/4', function (req, res) {
  let answer = req.session.data.eConsultAdminNotEmergency;

  if (answer === 'yes') {

    res.redirect('/app/econsult/admin/v1/5')

  } else {
    res.redirect('/app/econsult/admin/v1/end/emergency')
  }
});

router.post('/app/econsult/admin/v1/5', function (req, res) {
  let answer = req.session.data.eConsultAdminCorona;

  if (answer === 'yes') {

    res.redirect('/app/econsult/admin/v1/end/covid')

  } else {
    res.redirect('/app/econsult/admin/v1/6')
  }
});

router.post('/app/econsult/admin/v1/8', function (req, res) {
  let answer = req.session.data.eConsultAdminService;

  if (answer === 'Sick note') {

    res.redirect('/app/econsult/admin/v1/9')

  } else {
    res.redirect('/app/econsult/admin/v1/8')
  }
});

router.post('/app/econsult/admin/v1/9', function (req, res) {
  let answer = req.session.data.eConsultAdminCoronaNote;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/admin/v1/end/isolation-note-needed')

  } else {
    res.redirect('/app/econsult/admin/v1/10')
  }
});

router.post('/app/econsult/admin/v1/10', function (req, res) {
  let answer = req.session.data.eConsultAdminNewNote;

  if (answer === 'New request') {

    res.redirect('/app/econsult/admin/v1/11')

  } else {
    res.redirect('/app/econsult/admin/v1/12')
  }
});

router.post('/app/econsult/admin/v1/11', function (req, res) {
  let answer = req.session.data.eConsultAdminLengthOfNote;

  if (answer === '7 days or less') {

    res.redirect('/app/econsult/admin/v1/end/note-denied')

  } else {
    res.redirect('/app/econsult/admin/v1/12')
  }
});

module.exports = router;
