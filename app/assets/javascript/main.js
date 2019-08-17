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


var deferredPrompt = null;
window.addEventListener("beforeinstallprompt", function(e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault(); // Stash the event so it can be triggered later.

  deferredPrompt = e;
});

async function install() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    console.log(deferredPrompt);
    deferredPrompt.userChoice.then(function(choiceResult) {
      if (choiceResult.outcome === "accepted") {
        console.log("Your PWA has been installed");
      } else {
        console.log("User chose to not install your PWA");
      }

      deferredPrompt = null;
    });
  }
}
