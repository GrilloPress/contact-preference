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

function passwordToggle (){

  // input
  // where to post
  // true value
  // false value

  if ($('input.toggle').is(":checked")) {
    $.post( "/app/password", { touchID: "on" } );
  } else {
    $.post( "/app/password", { touchID: "off" } );
  }

}



function pharmSelect(pharm, url){



  var details;
  if (pharm === "Ma Manning (Pharmacy) Ltd") {
    details = "<p>97 Lidgett Lane, Leeds, West Yorkshire, <br> LS8 1QR <br>0113 266 1786 </p>"
  } else if (pharm === "Medichem (Leeds) Ltd") {
    details = "40-42 Harrogate Road, Leeds, <br> LS7 4LA <br> 0113 262 2684"
  } else if (pharm === "Knights Chapel Allerton Pharmacy") {
    details = "6 Stainbeck Lane, Leeds, <br> LS7 3QY<br> 0113 268 1163"
  } else {
    details = "210-212 Chapeltown Road, Leeds, <br> LS7 4JA<br> 0113 262 3944"
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
    info = "<p>www.echo.co.uk</p><p>020 8068 8067</p>"
  } else if (online === "Medichem (Leeds) Ltd") {
    info = ""
  } else if (online === "Knights Chapel Allerton Pharmacy") {
    info = ""
  } else {
    info = ""
  }





  $.post( "", { onlineName: online, onlineInfo: info } );
  if (url) {
    window.location.href = url
  } else {
    window.location.href = ""
  }

}
