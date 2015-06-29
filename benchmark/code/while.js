'use strict';

var isObject = require('is-extendable');

module.exports = extend;

function extend(o, objects) {
  if (!isObject(o)) {
    o = {};
  }
  var len = arguments.length, i = 1;
  while (len--) {
    var obj = arguments[i++];

    if (isObject(obj)) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          o[key] = obj[key];
        }
      }
    }
  }
  return o;
}
