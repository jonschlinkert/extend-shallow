'use strict';

var isObject = require('is-extendable');

module.exports = function extend(o, objects) {
  if (!isObject(o)) {o = {};}

  var len = arguments.length;
  var i = 1;

  while (len--) {
    var obj = arguments[i++];
    if (isObject(obj)) {
      var keys = Object.keys(obj);
      var klen = keys.length;

      for (var j = 0; j < klen; j++) {
        var key = keys[j];
        if (obj.hasOwnProperty(key)) {
          o[key] = obj[key];
        }
      }
    }
  }
  return o;
};
