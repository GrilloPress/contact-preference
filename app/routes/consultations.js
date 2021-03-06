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


// V3 Admin with Fit Note Journey
router.post('/app/engage/admin/v3/fit-note/type', function (req, res) {
  let answer = req.body.engageNewOrExtension;

  if (answer === 'New') {

    res.redirect('/app/engage/admin/v3/fit-note/new-request')

  } else {
    res.redirect('/app/engage/admin/v3/fit-note/start-date')
  }
});

router.post('/app/engage/admin/v3/fit-note/new-request', function (req, res) {
  let answer = req.body.engageFitLengthIllness;

  if (answer === '7 days or less') {

    res.redirect('/app/engage/admin/v3/fit-note/note-not-needed')

  } else {
    res.redirect('/app/engage/admin/v3/fit-note/start-date')
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




      // Covid error validation


      router.post('/app/engage/med/v2/multi-radio', function (req, res) {

        let lossOfTaste = req.body.lossOfTaste;
        let lossOfSmell = req.body.lossOfSmell;
        let runnyNose = req.body.runnyNose;
        let nausea = req.body.nausea;


        if (lossOfTaste && lossOfSmell && runnyNose && nausea) {

          res.redirect('/app/engage/med/v2/covid-household?covidError=')

        } else {

          var errorURL = "";

          if (lossOfTaste) {

            errorURL += " lossOfTasteError=&"

          } else {
             errorURL += "lossOfTasteError=True&"
          }

          if (lossOfSmell) {

            errorURL += "lossOfSmellError=&"

          } else {
             errorURL += "lossOfSmellError=True&"
          }

          if (runnyNose) {

            errorURL += "runnyNoseError=&"

          } else {
             errorURL += "runnyNoseError=True&"
          }


          if (nausea) {

            errorURL += "nauseaError=&"

          } else {
             errorURL += "nauseaError=True&"
          }


          res.redirect('/app/engage/med/v2/multi-radio?' + errorURL )
        }

      });


//////// V2 ROUTES

// OLC

router.post('/app/engage/med/v2/health-info-check', function (req, res) {
  let answer = req.body.engageHealthInfoCheck;

  if (answer === 'yes') {

    res.redirect('/app/engage/med/v2/health-info')

  } else {
    res.redirect('/app/engage/med/v2/check-answers')
  }
});


/// Terms accepted

// admin
router.post('/app/engage/admin/v2/terms/engage-medical', function (req, res) {
  let answer = req.session.data.engagePrivacyPolicy;

  if (answer === 'true') {

    res.redirect('/app/engage/admin/v2/telephone')

  } else {
    res.redirect('/app/engage/admin/v2/terms/engage-privacy')
  }
});

// admin
router.post('/app/engage/admin/v2/terms/engage-medical-111', function (req, res) {
  let answer = req.session.data.engagePrivacyPolicy;

  if (answer === 'true') {

    res.redirect('/app/engage/admin/v2/telephone')

  } else {
    res.redirect('/app/engage/admin/v2/terms/engage-privacy')
  }
});

// medical
router.post('/app/engage/terms/v2/engage-medical', function (req, res) {
  let answer = req.session.data.engagePrivacyPolicy;

  if (answer === 'true') {

    res.redirect('/app/engage/premed/v2/telephone')

  } else {
    res.redirect('/app/engage/terms/v2/engage-privacy')
  }
});

// medical 111 style
router.post('/app/engage/terms/v2/engage-medical-111', function (req, res) {
  let answer = req.session.data.engagePrivacyPolicy;

  if (answer === 'true') {

    res.redirect('/app/engage/premed/v2/telephone')

  } else {
    res.redirect('/app/engage/terms/v2/engage-privacy')
  }
});

// medical
router.post('/app/engage/terms/v2/nhs-login', function (req, res) {
  let answer = req.session.data.engageLoginAccepted;

  if (answer === 'true') {

    res.redirect('/app/engage/who/v2/index')

  } else {
    res.redirect('/app/engage/terms/v2/nhs-login')
  }
});


// admin
router.post('/app/engage/admin/v2/terms/nhs-login', function (req, res) {
  let answer = req.session.data.engageLoginAccepted;

  if (answer === 'true') {

    res.redirect('/app/engage/admin/v2/who/index')

  } else {
    res.redirect('/app/engage/admin/v2/terms/nhs-login')
  }
});


// Terms page - redirects user to correct use my data page depending on if it's a p5 user or not

router.post('/app/econsult/adult/terms/start-v2', function (req, res) {
  let p5 = req.session.data.p5;

  if (p5 === 'true') {

    res.redirect('/app/econsult/adult/terms/data-sharing-p5')

  } else {
    res.redirect('/app/econsult/adult/terms/data-sharing')
    }
});


// NHS login routes - skips page if user has already seen the page
router.post('/app/engage/admin/v3/terms/index', function (req, res) {
  let answer = req.session.data.adminLogin;

  if (answer === 'seen') {

    res.redirect('/app/engage/admin/v3/who/index')

  } else {
    res.redirect('/app/engage/admin/v3/terms/nhs-login')
  }
});


router.post('/app/engage/terms/v2/index', function (req, res) {
  let answer = req.session.data.medLogin;

  if (answer === 'seen') {

    res.redirect('/app/engage/who/v2/index')

  } else {
    res.redirect('/app/engage/terms/v2/nhs-login')
  }
});


router.post('/app/engage/messaging/v2/terms-messages', function (req, res) {
  let answer = req.session.data.messagingLogin;

  if (answer === 'seen') {

    res.redirect('/app/engage/messaging/v2/engage-inbox')

  } else {
    res.redirect('/app/engage/messaging/v2/nhs-login')
  }
});









// ERROR privacy

router.post('/app/engage/terms/v2/engage-privacy', function (req, res) {
  let answer = req.body.engagePrivacyPolicy;

  if (answer === 'true') {

    res.redirect('/app/engage/premed/v2/telephone')

  } else {
    res.redirect('/app/engage/terms/v2/engage-privacy-error')
  }
});

// Add a problem routing

router.post('/app/engage/category/v2/search-v2', function (req,res){

// load in the array if it exists already
let symptoms = req.session.data['symptoms'] || []

// push the value from the input field into the array
symptoms.push(req.session.data['engageProblemCat'])

// push the array back into the session data
req.session.data['symptoms'] = symptoms

// move to the summary page
res.redirect('/app/engage/category/v2/review-v2')

});

router.post('/app/engage/category/v2/review-v2', function (req, res) {

  // get the value from the radio button
   let anythingElse = req.session.data['anythingElse']

   // routing based on the answer
   if (anythingElse == "yes"){
     res.redirect('/app/engage/category/v2/search-v2')
   } else {
     res.redirect('/app/engage/category/v2/attention')
   }
});


// called from the form that wraps around the summary list
router.post('/remove', function (req, res) {

  // pull in the array values
  var symptoms = req.session.data['symptoms']

  // pick up the value of the specific remove link
  let remove = req.session.data.remove

  // remove 1 item from the array at the place indicated by the remove link
  symptoms.splice(remove, 1);

  // reload the page
  res.redirect('/app/engage/category/v2/review-v2')
});





////////////////////////////////////////////////////////////////////////////////
// ECONSULT routes
////////////////////////////////////////////////////////////////////////////////


router.post('/app/econsult/hub/v1/index-2', function (req, res) {
  let answer = req.session.data.eConsultYourselfOrChild;

  if (answer === 'child') {

    res.redirect('/app/econsult/child/v2/child-privacy')

  } else {
    res.redirect('/app/econsult/adult/3_privacy')
  }
});




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

// ECONSULT child V2 routes

router.post('/app/econsult/child/v2/3_covid', function (req, res) {
  let answer = req.session.data.econsultCOVID;

  if (answer === 'yes') {

    res.redirect('/app/econsult/child/v2/end/covid')

  } else {
    res.redirect('/app/econsult/child/v2/5_your-dob')
  }
});

router.post('/app/econsult/child/v2/2_emergency', function (req, res) {
  let answer = req.session.data.econsultEmergency;

  if (answer === 'yes') {

    res.redirect('/app/econsult/child/v2/end/emergency')

  } else {
    res.redirect('/app/econsult/child/v2/3_covid')
  }
});

router.post('/app/econsult/child/v2/4_registered', function (req, res) {
  let answer = req.session.data.econsultRegistered;

  if (answer === 'no') {

    res.redirect('/app/econsult/child/v2/end/registered')

  } else {
    res.redirect('/app/econsult/child/v2/5_your-dob')
  }
});

router.post('/app/econsult/child/v2/6_legal-guardian', function (req, res) {
  let answer = req.session.data.econsultLegalGuardian;

  if (answer === 'no') {

    res.redirect('/app/econsult/child/v2/end/legal-guardian')

  } else {
    res.redirect('/app/econsult/child/v2/7_childs-sex')
  }
});

router.post('/app/econsult/child/v2/11_', function (req, res) {
  let answer = req.session.data.econsultTriedAnything;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/11_a')

  } else {
    res.redirect('/app/econsult/child/v2/12_')
  }
});

router.post('/app/econsult/child/v2/12_', function (req, res) {
  let answer = req.session.data.econsultTrying;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/12_a')

  } else {
    res.redirect('/app/econsult/child/v2/13_')
  }
});

router.post('/app/econsult/child/v2/13_', function (req, res) {
  let answer = req.session.data.econsultTreatment;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/13_a')

  } else {
    res.redirect('/app/econsult/child/v2/14_')
  }
});

router.post('/app/econsult/child/v2/14_', function (req, res) {
  let answer = req.session.data.econsultParticularDr;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/14_a')

  } else {
    res.redirect('/app/econsult/child/v2/15_')
  }
});

router.post('/app/econsult/child/v2/15_', function (req, res) {
  let answer = req.session.data.econsultFever;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/end/fever')

  } else {
    res.redirect('/app/econsult/child/v2/16_')
  }
});

router.post('/app/econsult/child/v2/16_', function (req, res) {
  let answer = req.session.data.econsultHadItBefore;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/16_a')

  } else {
    res.redirect('/app/econsult/child/v2/17_')
  }
});

router.post('/app/econsult/child/v2/24_', function (req, res) {
  let answer = req.session.data.econsultObjectInEye;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/end/eye-object')

  } else {
    res.redirect('/app/econsult/child/v2/25_')
  }
});

router.post('/app/econsult/child/v2/25_', function (req, res) {
  let answer = req.session.data.econsultVisionChanges;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/end/vision')

  } else {
    res.redirect('/app/econsult/child/v2/26_')
  }
});

router.post('/app/econsult/child/v2/29_', function (req, res) {
  let answer = req.session.data.econsultPreviousSurgery;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/29_a')

  } else {
    res.redirect('/app/econsult/child/v2/30_')
  }
});

router.post('/app/econsult/child/v2/31_', function (req, res) {
  let answer = req.session.data.econsultRash;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/end/rash')

  } else {
    res.redirect('/app/econsult/child/v2/32_')
  }
});

router.post('/app/econsult/child/v2/32_', function (req, res) {
  let answer = req.session.data.econsultSick;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/32_a')

  } else {
    res.redirect('/app/econsult/child/v2/33_')
  }
});

router.post('/app/econsult/child/v2/32_a', function (req, res) {
  let answer = req.session.data.econsultSickDays;

  if (answer === 'More than 5 days') {

    res.redirect('/app/econsult/child/v2/end/rash')

  } else {
    res.redirect('/app/econsult/child/v2/32_b')
  }
});

router.post('/app/econsult/child/v2/32_b', function (req, res) {
  let answer = req.session.data.econsultSickTimesADay;

  if (answer === 'More than 5 times a day') {

    res.redirect('/app/econsult/child/v2/end/rash')

  } else {
    res.redirect('/app/econsult/child/v2/32_c')
  }
});

router.post('/app/econsult/child/v2/32_c', function (req, res) {
  let answer = req.session.data.econsultSickColour;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/end/rash')

  } else {
    res.redirect('/app/econsult/child/v2/33_')
  }
});

router.post('/app/econsult/child/v2/33_', function (req, res) {
  let answer = req.session.data.econsultDiarrhoea;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/33_a')

  } else {
    res.redirect('/app/econsult/child/v2/34_')
  }
});

router.post('/app/econsult/child/v2/33_a', function (req, res) {
  let answer = req.session.data.econsultDiarrhoeaDays;

  if (answer === 'More than 5 days') {

    res.redirect('/app/econsult/child/v2/end/rash')

  } else {
    res.redirect('/app/econsult/child/v2/33_b')
  }
});

router.post('/app/econsult/child/v2/33_b', function (req, res) {
  let answer = req.session.data.econsultDiarrhoeaTimesADay;

  if (answer === 'More than 5 times a day') {

    res.redirect('/app/econsult/child/v2/end/rash')

  } else {
    res.redirect('/app/econsult/child/v2/33_c')
  }
});

router.post('/app/econsult/child/v2/33_c', function (req, res) {
  let answer = req.session.data.econsultDiarrhoeaColour;

  if (answer === 'No') {

    res.redirect('/app/econsult/child/v2/34_')

  } else {
    res.redirect('/app/econsult/child/v2/end/rash')
  }
});


router.post('/app/econsult/child/v2/35_', function (req, res) {
  let answer = req.session.data.econsultSeenBefore;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/35_a')

  } else {
    res.redirect('/app/econsult/child/v2/36_')
  }
});

router.post('/app/econsult/child/v2/36_', function (req, res) {
  let answer = req.session.data.econsultAnythingElse;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/36_a')

  } else {
    res.redirect('/app/econsult/child/v2/37_')
  }
});

router.post('/app/econsult/child/v2/37_', function (req, res) {
  let answer = req.session.data.econsultSleepConcerns;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/37_a')

  } else {
    res.redirect('/app/econsult/child/v2/38_')
  }
});

router.post('/app/econsult/child/v2/38_', function (req, res) {
  let answer = req.session.data.econsultGrowthConcerns;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/38_a')

  } else {
    res.redirect('/app/econsult/child/v2/39_')
  }
});

router.post('/app/econsult/child/v2/39_', function (req, res) {
  let answer = req.session.data.econsultDevelopmentConcerns;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/39_a')

  } else {
    res.redirect('/app/econsult/child/v2/40_')
  }
});

router.post('/app/econsult/child/v2/41_', function (req, res) {
  let answer = req.session.data.econsultNursery;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/41_a')

  } else {
    res.redirect('/app/econsult/child/v2/42_')
  }
});

router.post('/app/econsult/child/v2/42_', function (req, res) {
  let answer = req.session.data.econsultSupportServices;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/42_a')

  } else {
    res.redirect('/app/econsult/child/v2/43_')
  }
});

router.post('/app/econsult/child/v2/44_', function (req, res) {
  let answer = req.session.data.econsultAllergic;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/44_a')

  } else {
    res.redirect('/app/econsult/child/v2/45_')
  }
});

router.post('/app/econsult/child/v2/45_', function (req, res) {
  let answer = req.session.data.econsultOtherMedical;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/45_a')

  } else {
    res.redirect('/app/econsult/child/v2/46_')
  }
});

router.post('/app/econsult/child/v2/46_', function (req, res) {
  let answer = req.session.data.econsultOtherDrugs;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/46_a')

  } else {
    res.redirect('/app/econsult/child/v2/47_')
  }
});

router.post('/app/econsult/child/v2/47_', function (req, res) {
  let answer = req.session.data.econsultFamilyHistory;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/child/v2/47_a')

  } else {
    res.redirect('/app/econsult/child/v2/48_')
  }
});

// ECONSULT adult routes - contraception


router.post('/app/econsult/adult/5_emergency', function (req, res) {
  let answer = req.session.data.econsultAdultEmergency;

  if (answer === 'I am experiencing some of these') {

    res.redirect('/app/econsult/adult/end/emergency')

  } else {
    res.redirect('/app/econsult/adult/6_covid')

  }
});

router.post('/app/econsult/adult/6_covid', function (req, res) {
  let answer = req.session.data.econsultAdultCOVIDCheck;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/covid')

  } else {
    res.redirect('/app/econsult/adult/8_sex')

  }
});

router.post('/app/econsult/adult/7_registered', function (req, res) {
  let answer = req.session.data.econsultAdultRegistered;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/8_sex')

  } else {
    res.redirect('/app/econsult/adult/end/registered')

  }
});

router.post('/app/econsult/adult/8_sex', function (req, res) {
  let answer = req.session.data.econsultAdultSex;

  if (answer === 'Female') {

    res.redirect('/app/econsult/adult/9_dob')

  } else {
    res.redirect('/app/econsult/adult/end/wrong-sex')

  }
});

router.post('/app/econsult/adult/11_', function (req, res) {
  let answer = req.session.data.econsultRequiredContraception;

  if (answer === 'I am experiencing some side effects that I would like to discuss') {

    res.redirect('/app/econsult/adult/12_')

  } else {
    res.redirect('/app/econsult/adult/12_')

  }
});

router.post('/app/econsult/adult/13_', function (req, res) {
  let answer = req.session.data.econsultParticularGP;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/13_a')

  } else {
    res.redirect('/app/econsult/adult/14_using')

  }
});

router.post('/app/econsult/adult/16_', function (req, res) {
  let answer = req.session.data.econsultMissedPills;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/16_a')

  } else {
    res.redirect('/app/econsult/adult/17_')

  }
});

router.post('/app/econsult/adult/17_', function (req, res) {
  let answer = req.session.data.eConsultWhyTaking;

  if (answer === 'Other') {

    res.redirect('/app/econsult/adult/17_a')

  } else {
    res.redirect('/app/econsult/adult/18_')

  }
});

router.post('/app/econsult/adult/20_', function (req, res) {
  let answer = req.session.data.econsultWhoProvidesPrescription;

  if (answer === 'Other') {

    res.redirect('/app/econsult/adult/20_a')

  } else {
    res.redirect('/app/econsult/adult/21_')

  }
});

router.post('/app/econsult/adult/22_', function (req, res) {
  let answer = req.session.data.econsultLastConsultation;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/22_a')

  } else {
    res.redirect('/app/econsult/adult/23_')

  }
});

router.post('/app/econsult/adult/23_', function (req, res) {
  let answer = req.session.data.econsultSpecialMonitoring;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/23_a')

  } else {
    res.redirect('/app/econsult/adult/24_')

  }
});

router.post('/app/econsult/adult/25_', function (req, res) {
  let answer = req.session.data.econsultMissedPeriods;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/25_a')

  } else {
    res.redirect('/app/econsult/adult/26_')

  }
});

router.post('/app/econsult/adult/29_', function (req, res) {
  let answer = req.session.data.econsultPregnancyChance;

  if (answer === 'No') {

    res.redirect('/app/econsult/adult/30_')

  } else  if (answer === 'Yes'){
    res.redirect('/app/econsult/adult/end/pregnancy')

  } else {
    res.redirect('/app/econsult/adult/29_a')

  }
});

router.post('/app/econsult/adult/29_a', function (req, res) {
  let answer = req.session.data.econsultUnprotectedSex;

  if (answer === 'No') {

    res.redirect('/app/econsult/adult/30_')

  } else {
    res.redirect('/app/econsult/adult/end/pregnancy')

  }
});

router.post('/app/econsult/adult/30_', function (req, res) {
  let answer = req.session.data.econsultAnythingElse;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/30_a')

  } else {
    res.redirect('/app/econsult/adult/31_')

  }
});

router.post('/app/econsult/adult/31_', function (req, res) {
  let answer = req.session.data.econsultAdultOtherConditions;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/31_a')

  } else {
    res.redirect('/app/econsult/adult/32_')

  }
});

router.post('/app/econsult/adult/32_', function (req, res) {
  let answer = req.session.data.econsultPrescribedDrugs;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/32_a')

  } else {
    res.redirect('/app/econsult/adult/33_')

  }
});

router.post('/app/econsult/adult/33_', function (req, res) {
  let answer = req.session.data.econsultOtherDrugsPharmacist;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/33_a')

  } else {
    res.redirect('/app/econsult/adult/34_')

  }
});

router.post('/app/econsult/adult/34_', function (req, res) {
  let answer = req.session.data.econsultAdultOtherTreatment;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/34_a')

  } else {
    res.redirect('/app/econsult/adult/35_')

  }
});

router.post('/app/econsult/adult/35_', function (req, res) {
  let answer = req.session.data.econsultAdultFamilyHistory;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/35_a')

  } else {
    res.redirect('/app/econsult/adult/36_')

  }
});

// eConsult Adult Eczema Route (SHOWS FILE UPLOAD)



router.post('/app/econsult/adult/eczema/5_emergency', function (req, res) {
  let answer = req.session.data.econsultAdultEczemaEmergency;

  if (answer === 'I am experiencing some of these') {

    res.redirect('/app/econsult/adult/end/emergency')

  } else {
    res.redirect('/app/econsult/adult/eczema/6_covid')

  }
});




router.post('/app/econsult/adult/eczema/6_covid', function (req, res) {
  let answer = req.session.data.econsultAdultCOVIDCheckEczema;
  let p5 = req.session.data.p5;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/covid')

  } else {
    if (p5 === 'true') {
      res.redirect('/app/econsult/adult/eczema/7_registered')
      } else {
    res.redirect('/app/econsult/adult/eczema/8_sex')
    }
  }
});

router.post('/app/econsult/adult/eczema/7_registered', function (req, res) {
  let answer = req.session.data.econsultAdultRegisteredEczema;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/8_sex')

  } else {
    res.redirect('/app/econsult/adult/end/registered')

  }
});

router.post('/app/econsult/adult/eczema/12_', function (req, res) {
  let answer = req.session.data.econsultEczemaPast;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/12_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/13_')

  }
});

router.post('/app/econsult/adult/eczema/12_b', function (req, res) {
  let answer = req.session.data.econsultEczemaPastSuccess;

  if (answer === 'Somewhat') {

    res.redirect('/app/econsult/adult/eczema/12_c')

  } else {
    res.redirect('/app/econsult/adult/eczema/13_')

  }
});

router.post('/app/econsult/adult/eczema/13_', function (req, res) {
  let answer = req.session.data.econsultEczemaTryingNow;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/13_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/14_')

  }
});

router.post('/app/econsult/adult/eczema/13_b', function (req, res) {
  let answer = req.session.data.econsultEczemaTryingNowWorking;

  if (answer === 'Somewhat') {

    res.redirect('/app/econsult/adult/eczema/13_c')

  } else {
    res.redirect('/app/econsult/adult/eczema/14_')

  }
});

router.post('/app/econsult/adult/eczema/14_', function (req, res) {
  let answer = req.session.data.econsultEczemaTreatmentWanted;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/14_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/15_')

  }
});

router.post('/app/econsult/adult/eczema/15_', function (req, res) {
  let answer = req.session.data.econsultEczemaParticularGP;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/15_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/16_')

  }
});

router.post('/app/econsult/adult/eczema/16_', function (req, res) {
  let answer = req.session.data.econsultEczemaPreviousDiagnosis;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/16_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/17_')

  }
});

router.post('/app/econsult/adult/eczema/19_', function (req, res) {
  let answer = req.session.data.econsultEczemaPhotoUploadQuestion;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/19_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/20_')

  }
});

router.post('/app/econsult/adult/eczema/19_b', function (req, res) {
  let answer = req.session.data.econsultEczemaUsePhoto;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/19_c')

  } else {
    res.redirect('/app/econsult/adult/eczema/19_a')

  }
});

router.post('/app/econsult/adult/eczema/31_', function (req, res) {
  let answer = req.session.data.econsultEczemaFever;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/31_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/32_')

  }
});

router.post('/app/econsult/adult/eczema/33_', function (req, res) {
  let answer = req.session.data.econsultEczemaSeen;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/33_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/34_')

  }
});

router.post('/app/econsult/adult/eczema/34_', function (req, res) {
  let answer = req.session.data.econsultEczemaExtraInfo;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/34_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/35_')

  }
});

router.post('/app/econsult/adult/eczema/35_', function (req, res) {
  let answer = req.session.data.econsultEczemaOtherMedical;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/35_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/36_')

  }
});

router.post('/app/econsult/adult/eczema/36_', function (req, res) {
  let answer = req.session.data.econsultEczemaOtherPrescriptions;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/36_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/37_')

  }
});

router.post('/app/econsult/adult/eczema/37_', function (req, res) {
  let answer = req.session.data.econsultEczemaOtherPharmacy;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/37_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/38_')

  }
});

router.post('/app/econsult/adult/eczema/38_', function (req, res) {
  let answer = req.session.data.econsultEczemaOtherTreatment;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/38_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/39_')

  }
});

router.post('/app/econsult/adult/eczema/39_', function (req, res) {
  let answer = req.session.data.econsultEczemaFamilyHistory;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/39_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/40_')

  }
});

router.post('/app/econsult/adult/eczema/42_', function (req, res) {
  let answer = req.session.data.econsultEczemaFamilyAllergiesCream;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/42_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/43_')

  }
});


// eConsult Adult Eczema Route V2 (SHOWS FILE UPLOAD)


router.post('/app/econsult/adult/eczema/v2/5_emergency', function (req, res) {
  let answer = req.session.data.econsultAdultEczemaEmergency;

  if (answer === 'I am experiencing some of these') {

    res.redirect('/app/econsult/adult/end/emergency')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/6_covid')

  }
});




router.post('/app/econsult/adult/eczema/v2/6_covid', function (req, res) {
  let answer = req.session.data.econsultAdultCOVIDCheckEczema;
  let p5 = req.session.data.p5;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/covid')

  } else {
    if (p5 === 'true') {
      res.redirect('/app/econsult/adult/eczema/v2/7_registered')
      } else {
    res.redirect('/app/econsult/adult/eczema/v2/8_sex')
    }
  }
});

router.post('/app/econsult/adult/eczema/v2/7_registered', function (req, res) {
  let answer = req.session.data.econsultAdultRegisteredEczema;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/8_sex')

  } else {
    res.redirect('/app/econsult/adult/end/registered')

  }
});

router.post('/app/econsult/adult/eczema/v2/12_', function (req, res) {
  let answer = req.session.data.econsultEczemaPast;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/12_a')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/12_any-particular')

  }
});

router.post('/app/econsult/adult/eczema/v2/12_any-particular', function (req, res) {
  let answer = req.session.data.econsultAnyParticular;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/12_any-particular-yes')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/13_describe-symptoms')

  }
});

router.post('/app/econsult/adult/eczema/v2/16_new-rash', function (req, res) {
  let answer = req.session.data.econsultNewRash;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/16_disappear-rash')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/16_difficulty-breathing')

  }
});


router.post('/app/econsult/adult/eczema/v2/16_disappear-rash', function (req, res) {
  let answer = req.session.data.econsultRashDisappear;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/16_difficulty-breathing')

  } else {
    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  }
});

router.post('/app/econsult/adult/eczema/v2/16_difficulty-breathing', function (req, res) {
  let answer = req.session.data.econsultDifficultyBreathing;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/17_swelling')

  }
});

router.post('/app/econsult/adult/eczema/v2/17_swelling', function (req, res) {
  let answer = req.session.data.econsultSwelling;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/18_face-swelling')

  }
});

router.post('/app/econsult/adult/eczema/v2/18_face-swelling', function (req, res) {
  let answer = req.session.data.econsultFaceSwelling;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/19_high-temp')

  }
});


router.post('/app/econsult/adult/eczema/v2/20_shivering', function (req, res) {
  let answer = req.session.data.econsultShiver;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/21_bright-lights')

  }
});

router.post('/app/econsult/adult/eczema/v2/21_bright-lights', function (req, res) {
  let answer = req.session.data.econsultBrightLights;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/22_stiff-neck')

  }
});

router.post('/app/econsult/adult/eczema/v2/22_stiff-neck', function (req, res) {
  let answer = req.session.data.econsultStiffNeck;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/23_chemo')

  }
});

router.post('/app/econsult/adult/eczema/v2/23_chemo', function (req, res) {
  let answer = req.session.data.econsultChemo;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/24_dizzy')

  }
});


router.post('/app/econsult/adult/eczema/v2/25_sweaty', function (req, res) {
  let answer = req.session.data.econsultSweaty;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/26_mottled')

  }
});


router.post('/app/econsult/adult/eczema/v2/26_mottled', function (req, res) {
  let answer = req.session.data.econsultMottled;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/27_drowsy')

  }
});

router.post('/app/econsult/adult/eczema/v2/27_drowsy', function (req, res) {
  let answer = req.session.data.econsultDrowsy;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/28_confused')

  }
});


router.post('/app/econsult/adult/eczema/v2/28_confused', function (req, res) {
  let answer = req.session.data.econsultConfused;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/29_speech')

  }
});

router.post('/app/econsult/adult/eczema/v2/29_speech', function (req, res) {
  let answer = req.session.data.econsultSpeech;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/30_urine')

  }
});


router.post('/app/econsult/adult/eczema/v2/30_urine', function (req, res) {
  let answer = req.session.data.econsultUrine;

  if (answer === 'No') {
    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/31_fluids')

  }
});

router.post('/app/econsult/adult/eczema/v2/31_fluids', function (req, res) {
  let answer = req.session.data.econsultFluids;

  if (answer === 'no') {

    res.redirect('/app/econsult/adult/end/seek-medical-advice')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/32_problems')

  }
});



router.post('/app/econsult/adult/eczema/v2/32_problems', function (req, res) {
  let answer = req.session.data.econsultProblemsCheckboxes;

  if (answer) {

    if (answer.includes('spreading')) {
      res.redirect('/app/econsult/adult/end/seek-medical-advice')
    } else if (answer.includes('redHot')) {
      res.redirect('/app/econsult/adult/end/seek-medical-advice')
    } else if (answer.includes('sore')) {
      res.redirect('/app/econsult/adult/end/seek-medical-advice')
    } else if (answer.includes('leaking')) {
      res.redirect('/app/econsult/adult/end/seek-medical-advice')
    } else {
      res.redirect('/app/econsult/adult/eczema/v2/33_come-and-go')
  }}


});



router.post('/app/econsult/adult/eczema/v2/34_pattern', function (req, res) {
  let answer = req.session.data.econsultPattern;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/34_pattern-what')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/35_contact-rash')

  }
});



router.post('/app/econsult/adult/eczema/v2/35_contact-rash', function (req, res) {
  let answer = req.session.data.econsultContactRash;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/35_contact-rash-yes')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/file-upload/1_upload-choice')

  }
});


router.post('/app/econsult/adult/eczema/v2/36_anything-else', function (req, res) {
  let answer = req.session.data.econsultAnythingElse2;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/36_anything-else-yes')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/37_drugs')

  }
});


router.post('/app/econsult/adult/eczema/v2/37_drugs', function (req, res) {
  let answer = req.session.data.econsultDrugs;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/37_drugs-yes')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/38_alcohol')

  }
});


router.post('/app/econsult/adult/eczema/v2/40_allergies', function (req, res) {
  let answer = req.session.data.econsultAllergies;
  let econsultAdultSexEczema = req.session.data.econsultAdultSexEczema;


  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/40_allergies-yes')

  } else {
    if (econsultAdultSexEczema === 'Female') {
      res.redirect('/app/econsult/adult/eczema/v2/41_pregnant')
      } else {
    res.redirect('/app/econsult/adult/eczema/v2/43_')
    }
  }
});

router.post('/app/econsult/adult/eczema/v2/40_allergies-yes', function (req, res) {
  let answer = req.session.data.econsultEczemaWhatAllergies;
  let econsultAdultSexEczema = req.session.data.econsultAdultSexEczema;

  if (econsultAdultSexEczema === 'Female') {

    res.redirect('/app/econsult/adult/eczema/v2/41_pregnant')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/43_')

  }
});


router.post('/app/econsult/adult/eczema/v2/file-upload/1_upload-choice', function (req, res) {
  let answer = req.session.data.econsultEczemaPhotoUploadQuestion;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/file-upload/2_before-you-upload')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/36_anything-else')

  }
});

router.post('/app/econsult/adult/eczema/v2/file-upload/5_photos-added', function (req, res) {
  let answer = req.session.data.anotherPhoto;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/adult/eczema/v2/file-upload/3_choose-photo')

  } else {
    res.redirect('/app/econsult/adult/eczema/v2/36_anything-else')

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


// admin v2

router.post('/app/econsult/admin/v2/4', function (req, res) {
  let answer = req.session.data.eConsultAdminNotEmergency;

  if (answer === 'yes') {

    res.redirect('/app/econsult/admin/v2/5')

  } else {
    res.redirect('/app/econsult/admin/v2/end/emergency')
  }
});

router.post('/app/econsult/admin/v2/5', function (req, res) {
  let answer = req.session.data.eConsultAdminCorona;

  if (answer === 'yes') {

    res.redirect('/app/econsult/admin/v2/end/covid')

  } else {
    res.redirect('/app/econsult/admin/v2/6')
  }
});

router.post('/app/econsult/admin/v2/8', function (req, res) {
  let answer = req.session.data.eConsultAdminService;

  if (answer === 'Sick note') {

    res.redirect('/app/econsult/admin/v2/9')

  } else {
    res.redirect('/app/econsult/admin/v2/8')
  }
});

router.post('/app/econsult/admin/v2/9', function (req, res) {
  let answer = req.session.data.eConsultAdminCoronaNote;

  if (answer === 'Yes') {

    res.redirect('/app/econsult/admin/v2/end/isolation-note-needed')

  } else {
    res.redirect('/app/econsult/admin/v2/10')
  }
});

router.post('/app/econsult/admin/v2/10', function (req, res) {
  let answer = req.session.data.eConsultAdminNewNote;

  if (answer === 'New request') {

    res.redirect('/app/econsult/admin/v2/11')

  } else {
    res.redirect('/app/econsult/admin/v2/12')
  }
});

router.post('/app/econsult/admin/v2/11', function (req, res) {
  let answer = req.session.data.eConsultAdminLengthOfNote;

  if (answer === '7 days or less') {

    res.redirect('/app/econsult/admin/v2/end/note-denied')

  } else {
    res.redirect('/app/econsult/admin/v2/12')
  }
});

module.exports = router;
