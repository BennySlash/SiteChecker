/* check if a website is working every one minute, if it is working, send a text message, if it isn't working, log "not online" to the console */
var XMLHttpRequest = require('xhr2');
var checkOnline = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://google.com', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        console.log('online');
      } else {
        console.log('not online');
      }
    }
  };
  xhr.send();
};
setInterval(checkOnline, 10000);