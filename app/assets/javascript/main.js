// ES6 or Vanilla JavaScript
// Set the scope to an upper path of the script location
// Response included "Service-Worker-Allowed : /"

/*
if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using a more restrictive scope.
  navigator.serviceWorker.register('/js/sw.js', {scope: './'}).then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  }, function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}

*/
UpUp.addSettings({ scope: './' });
UpUp.start({
  'content-url': '/offline',
  'assets': [ '/css/nhsapp.css', '/css/main.css'],
  'service-worker-url': '/js/sw.js'
});


function clickToggle (){

  if ($('input.toggle').is(":checked")) {
    $.post( "/app/notifications", { notifications: "on" } );
  } else {
    $.post( "/app/notifications", { notifications: "off" } );
  }

}

function cookieToggle (){

  if ($('input.toggle').is(":checked")) {
    $.post( "/app/settings/v1/cookies", { cookies: "on" } );
  } else {
    $.post( "/app/settings/v1/cookies", { cookies: "off" } );
  }

}

function passwordToggle (){

  // input
  // where to post
  // true value
  // false value

  if ($('input.toggle').is(":checked")) {

    if (confirm('Turn on Touch ID for "NHS App"' )) {
      $.post( "/app/password", { touchID: "on" } );
    } else {
      window.location.replace("/app/settings/v1/password");
    }

  } else {
    $.post( "/app/password", { touchID: "off" } );
  }

}

function popup(text, yesOption, noOption){

  if (confirm(text)) {
    yesOption
  } else {
    noOption
  }
}

function pharmSelect(pharm, url){

  var details;
  if (pharm === "Ma Manning (Pharmacy) Ltd") {
    details = "97 Lidgett Lane, Leeds, West Yorkshire, <br> LS8 1QR<br> Telephone: 0113 266 1786"
  } else if (pharm === "Medichem (Leeds) Ltd") {
    details = "40-42 Harrogate Road, Leeds, <br> LS7 4LA<br> Telephone: 0113 262 2684"
  } else if (pharm === "Knights Chapel Allerton Pharmacy") {
    details = "6 Stainbeck Lane, Leeds, <br> LS7 3QY<br> Telephone: 0113 268 1163"
  } else {
    details = "643 Roundhay Road, Leeds, <br> LS8 4BA<br> Telephone: 0113 240 3315"
  }

  $.post( "", { pharmName: pharm, pharmDetails: details } );
  if (url) {
    window.location.href = url
  } else {
    window.location.href = ""
  }

}

function onlineSelect(online, url){

  var info;
  if (online === "Echo") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.echo.co.uk" class="nhsuk-u-margin-bottom-1">www.echo.co.uk</a></p> Telephone: 020 80688067'
  } else if (online === "Quantum Pharmacy") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.prescriptioncareservices.co.uk" class="nhsuk-u-margin-bottom-1">www.prescriptioncareservices.co.uk</a></p> Telephone: 0121 7072786'
  } else if (online === "Stockport Pharmacy") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.stockport-pharmacy.co.uk" class="nhsuk-u-margin-bottom-1">www.stockport-pharmacy.co.uk</a></p> Telephone: 0161 2223505'
  } else if (online === "Care2homes") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://care2homes.co.uk" class="nhsuk-u-margin-bottom-1">care2homes.co.uk</a></p>Telephone: 01707 326151'
  } else if (online === "Akhtars Pharmacy") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.akhtarspharmacy.co.uk" class="nhsuk-u-margin-bottom-1">www.akhtarspharmacy.co.uk</a></p> Telephone: 01254 278515'
  } else if (online === "Airedale Pharmacy") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.airedalepharmacy.com" class="nhsuk-u-margin-bottom-1">www.airedalepharmacy.com</a></p> Telephone: 01535 957171'
  } else if (online === "Konnect Pharmacy") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.konnectpharmacy.co.uk" class="nhsuk-u-margin-bottom-1">www.konnectpharmacy.co.uk</a></p> Telephone: 0121 7093555'
  } else if (online === "Trojan Pharmacy") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.trojanpharmacy.co.uk" class="nhsuk-u-margin-bottom-1">www.trojanpharmacy.co.uk</a></p> Telephone: 024 76582000'
  } else if (online === "Essex Pharmacy Online") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.essexpharmacyonline.co.uk" class="nhsuk-u-margin-bottom-1">www.essexpharmacyonline.co.uk</a></p> Telephone: 01375 768282'
  } else if (online === "Nightingale Pharmacy") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.nightingale-pharmacy.co.uk" class="nhsuk-u-margin-bottom-1">www.nightingale-pharmacy.co.uk</a></p> Telephone: 0113 3452424'
  } else if (online === "Fastheal Pharmacy") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.fasthealpharmacy.com" class="nhsuk-u-margin-bottom-1">www.fasthealpharmacy.com</a></p> Telephone: 07868 039834'
  } else if (online === "Medico2u") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.medico2u.co.uk" class="nhsuk-u-margin-bottom-1">www.medico2u.co.uk</a></p> Telephone: 020 89044848'
  } else if (online === "Biomed Care Services") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.biomedcareservices.com" class="nhsuk-u-margin-bottom-1">www.biomedcareservices.com</a></p> Telephone: 0800 9994888'
  } else if (online === "Waterfoot Pharmacy") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.waterfootpharmacy.co.uk" class="nhsuk-u-margin-bottom-1">www.waterfootpharmacy.co.uk</a></p> Telephone: 01706 214588'
  } else if (online === "Drugs4delivery") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.drugs4delivery.com" class="nhsuk-u-margin-bottom-1">www.drugs4delivery.com</a></p> Telephone: 01472 241990'
  } else if (online === "Ryans Pharmacy") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.ryanspharmacy.co.uk" class="nhsuk-u-margin-bottom-1">www.ryanspharmacy.co.uk</a></p> Telephone: 01422 253510'
  } else if (online === "Jardines Direct") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.jardinespharmacy.co.uk" class="nhsuk-u-margin-bottom-1">www.jardinespharmacy.co.uk</a></p> Telephone: 01908 508387'
  } else if (online === "Hot Chemist") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.hotchemist.co.uk" class="nhsuk-u-margin-bottom-1">www.hotchemist.co.uk</a></p> Telephone: 01908 803499'
  } else if (online === "Village Pharmacy Hub") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.prescriptionportal.co.uk" class="nhsuk-u-margin-bottom-1">www.prescriptionportal.co.uk</a></p> Telephone: 0116 2745411'
  } else if (online === "Olive Pharmacy Online") {
    info = '<p class="nhsuk-u-margin-bottom-1"><a href="https://www.olivepharmacy.co.uk" class="nhsuk-u-margin-bottom-1">www.olivepharmacy.co.uk</a></p> Telephone: 01756 701208'
  }






  $.post( "", { onlineName: online, onlineInfo: info } );
  console.log(info);
  if (url) {
    window.location.href = url
  } else {
    window.location.href = "app/nominated-pharmacy/v1/online-pharmacy"
  }
}
