'use strict';

var isObject = require('is-extendable');

module.exports = function extend(o, objects) {
  if (!isObject(o)) {o = {};}
  var args = [].slice.call(arguments, 1);

  return args.reduce(function (acc, val, i) {
    if (isObject(val)) {
      for (var key in val) {
        if (val.hasOwnProperty(key)) {
          acc[key] = val[key];
        }
      }
    }
    return acc;
  }, o);
};
