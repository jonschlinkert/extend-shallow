'use strict';

var slice = require('array-slice');
var forOwn = require('for-own');

module.exports = function extend(o, objects) {
  if (o == null) { return {}; }
  if (objects == null) { return o; }

  var args = slice(arguments, 1);
  var len = args.length;

  for (var i = 0; i < len; i++) {
    var obj = args[i];
    forOwn(obj, function (value, key) {
      this[key] = value;
    }, o);
  }

  return o;
};
