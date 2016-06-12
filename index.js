'use strict';

var co = require('co');

co(function* () {
  var date = new Date();
  yield sleep(2000);
  console.log(new Date() - date);
});

function sleep (delay) {
  return function (cb) {
    setTimeout(cb, delay);
  }
}
