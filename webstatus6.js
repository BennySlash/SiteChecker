/* This program checks if a website is online every 10 seconds. If the website is online, 
this program logs "online" to the console; if it isn't online, it logs "not online" to the console */

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
