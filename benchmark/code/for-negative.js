'use strict';

var slice = require('array-slice');

module.exports = function extend(o, objects) {
  if (o == null) { return {}; }
  if (objects == null) { return o; }

  var args = slice(arguments, 1);
  var len = args.length - 1;

  for (var i = len; i >= 0; i--) {
    var obj = args[i];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        o[key] = obj[key];
      }
    }
  }

  return o;
};