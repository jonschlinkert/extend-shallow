'use strict';

var isObject = require('is-extendable');

module.exports = function extend(o, objects) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};


function assign(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
}
