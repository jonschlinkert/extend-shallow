'use strict';

var slice = require('array-slice');

module.exports = function extend(o, objects) {
  if (o == null) { return {}; }
  if (objects == null) { return o; }

  var args = slice(arguments, 1);
  var len = args.length;
  var i = 0;

  while (len--) {
    var obj = args[i++];
    if (obj) {
      var keys = Object.keys(obj);
      var klen = keys.length, j = 0;

      while (klen--) {
        var key = keys[j++];
        o[key] = obj[key];
      }
    }
  }
  return o;
};
