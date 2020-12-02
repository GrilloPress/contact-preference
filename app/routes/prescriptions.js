const express = require('express');
const router = express.Router();
var moment = require('moment');

router.post('/app/prescriptions/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v1/confirmed-3')

});

// prescriptions v2


router.post('/app/prescriptions/v2/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v2/confirmed')

});


// prescriptions v3


router.post('/app/prescriptions/v3/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v3/confirmed')

});


// prescriptions v4


router.post('/app/prescriptions/v4/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v4/confirmed-3')

});

// prescriptions v5


router.post('/app/prescriptions/v5/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v5/confirmed-3')

});


// prescriptions v6


router.post('/app/prescriptions/v6/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v6/confirmed-3')

});

// prescriptions v7


router.post('/app/prescriptions/v7/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v7/confirmed-4')

});


// prescriptions v7




router.post('/app/prescriptions/v7/proxy/save', function (req, res) {

  // add what is saved later!

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v7/proxy/confirmed')

});

router.post('/app/prescriptions/v4/nominate-interrupt', function (req, res) {
  let answer = req.body.nominateInterrupt;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v4/card-nom-pharmacy-2')

  } else {
    res.redirect('/app/prescriptions/v4/confirm-prescription-5')
  }
});


// prescriptions v8
router.post('/app/prescriptions/v8-acute-tpp/save', function (req, res) {
  // add what is saved later!
  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/app/prescriptions/v8-acute-tpp/confirmed-4')
});

router.post('/app/prescriptions/v8-acute-tpp/save-acute', function (req, res) {
  // add what is saved later!
  req.session.data.prescriptionConfirmedAcute = "True";
  req.session.data.messageRead6 = "unread";
  res.redirect('/app/prescriptions/v8-acute-tpp/confirmed-acute')
});


// Nominated pharmacy routing


router.post('/app/nominated-pharmacy/v1/type-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyType;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v1/find-community-pharmacy')

  } else {
    res.redirect('/app/nominated-pharmacy/v1/name-of-pharmacy')
  }
});



router.post('/app/nominated-pharmacy/v4/type-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyType;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v4/find-community-pharmacy')

  } else {
    res.redirect('/app/nominated-pharmacy/v4/online-interrupt')
  }
});



router.post('/app/nominated-pharmacy/v4/type-of-pharmacy-no-online', function (req, res) {
  let answer = req.body.pharmacyTypeOnline;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v4/find-community-pharmacy')

  } else {
    res.redirect('/app/nominated-pharmacy/v4/online-register-directly')
  }
});






router.post('/app/nominated-pharmacy/v1/name-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyName;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v1/search-name')

  } else {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    theRoll = getRandomInt(2);

      if (theRoll == 0) {

        res.redirect('/app/nominated-pharmacy/v1/online-results')

      } else {

        res.redirect('/app/nominated-pharmacy/v1/online-results-2')

      }

  }
});


router.post('/app/nominated-pharmacy/v1/nominate-a-pharmacy', function (req, res) {
  let answer = req.body.nominatePharmacy;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v1/find-community-pharmacy-nom')

  } else {
    res.redirect('/app/nominated-pharmacy/v1/name-of-pharmacy-nom')
  }
});

router.post('/app/nominated-pharmacy/v1/name-of-pharmacy-nom', function (req, res) {
  let answer = req.body.pharmacyNameNom;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v1/search-name-nom')

  } else {
    res.redirect('/app/nominated-pharmacy/v1/online-results-nom')
  }
});


router.post('/app/nominated-pharmacy/v2/type-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyType;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v2/find-community-pharmacy')

  } else {
    res.redirect('/app/nominated-pharmacy/v2/name-of-pharmacy')
  }
});

router.post('/app/nominated-pharmacy/v2/name-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyName;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v2/search-name')

  } else {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    theRoll = getRandomInt(2);

      if (theRoll == 0) {

        res.redirect('/app/nominated-pharmacy/v2/online-results')

      } else {

        res.redirect('/app/nominated-pharmacy/v2/online-results-2')

      }

  }
});


router.post('/app/nominated-pharmacy/v3/type-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyType;

  if (answer === 'community') {

    res.redirect('/app/nominated-pharmacy/v3/find-community-pharmacy')

  } else {
    res.redirect('/app/nominated-pharmacy/v3/name-of-pharmacy')
  }
});

router.post('/app/nominated-pharmacy/v3/name-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyName;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v3/search-name')

  } else {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    theRoll = getRandomInt(2);

      if (theRoll == 0) {

        res.redirect('/app/nominated-pharmacy/v3/online-results')

      } else {

        res.redirect('/app/nominated-pharmacy/v3/online-results-2')

      }

  }
});


router.post('/app/nominated-pharmacy/v4/name-of-pharmacy', function (req, res) {
  let answer = req.body.pharmacyName;

  if (answer === 'yes') {

    res.redirect('/app/nominated-pharmacy/v4/search-name')

  } else {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    theRoll = getRandomInt(2);

      if (theRoll == 0) {

        res.redirect('/app/nominated-pharmacy/v4/online-results')

      } else {

        res.redirect('/app/nominated-pharmacy/v4/online-results-2')

      }

  }
});


// NHSUK ROUTES

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

router.post('/nhsuk-to-prescription/nhsuk/has-prescription', function (req, res) {
  let answer = req.body.hasPrescription;

  if (answer === 'no') {

    res.redirect('/nhsuk-to-prescription/nhsuk/has-prescription-no')

  } else {
    res.redirect('/nhsuk-to-prescription/nhsuk/frequency')
  }
});

router.post('/nhsuk-to-prescription/nhsuk/frequency', function (req, res) {
  let answer = req.body.frequency;

  if (answer === 'once a year') {

    res.redirect('/nhsuk-to-prescription/nhsuk/frequency-no')

  } else {

    var env = (process.env.NODE_ENV || 'development').toLowerCase()

    if (env === 'production'){

      res.redirect('https://nhs-cid.herokuapp.com/create-account/v19/login-nhs?service=app5&serviceName=the%20NHS%20app&lsId=undefined&lsAccess=undefined&lsStudy=undefined&emailAddress=undefined&hidehead=undefined&devMode=undefined&returnUrl=https://nhs-contact.herokuapp.com/nhsuk-to-prescription/app/prescriptions-landing')

    } else {

      res.redirect('https://nhs-cid.herokuapp.com/create-account/v19/login-nhs?service=app5&serviceName=the%20NHS%20app&lsId=undefined&lsAccess=undefined&lsStudy=undefined&emailAddress=undefined&hidehead=undefined&devMode=undefined&returnUrl=http://localhost:2001/nhsuk-to-prescription/app/prescriptions-landing')

    }

  }
});



router.post('/app/prescriptions/v7/select-medicine-to-renew-mandatory', function (req, res) {

  let choosePrescription = req.body.choosePrescription;
  let specialRequest = req.body.specialRequest;

  if (specialRequest && choosePrescription) {

    res.redirect('/app/prescriptions/v7/confirm-prescription-5?specialRequestError=')

  } else {

    var errorURL = "";

    if (choosePrescription) {

      errorURL += "choosePrescriptionError=&"

    } else {
       errorURL += "choosePrescriptionError=True&"
    }

    if (specialRequest) {

      errorURL += "specialRequestError=&"

    } else {
       errorURL += "specialRequestError=True&"
    }

    res.redirect('/app/prescriptions/v7/select-medicine-to-renew-mandatory?' + errorURL )
  }

});


router.post('/app/prescriptions/v7/select-medicine-to-renew-4', function (req, res) {

  let choosePrescription = req.body.choosePrescription;
  let specialRequest = req.body.specialRequest;

  if (specialRequest && choosePrescription) {

    res.redirect('/app/prescriptions/v7/confirm-prescription-5?specialRequestError=')

  } else {

    var errorURL = "";

    if (choosePrescription) {

      errorURL += "choosePrescriptionError=&"

    } else {
       errorURL += "choosePrescriptionError=True&"
    }

    if (specialRequest) {

      errorURL += "specialRequestError=&"

    } else {
       errorURL += "specialRequestError=True&"
    }

    res.redirect('/app/prescriptions/v7/select-medicine-to-renew-4?' + errorURL )
  }

});

//acute prescription journey

router.post('/app/prescriptions/v8-acute-tpp/pastPrescription', function (req, res) {
  let answer = req.body.pastPrescription;

  if (answer === 'yes') {

    res.redirect('/app/prescriptions/v8-acute-tpp/whoPrescribed')

  } else {
    res.redirect('/app/prescriptions/v8-acute-tpp/whyMedication')
  }
});


module.exports = router;
