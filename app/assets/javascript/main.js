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
