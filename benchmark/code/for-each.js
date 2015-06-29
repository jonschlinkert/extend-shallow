'use strict';

var isObject = require('is-extendable');

module.exports = function extend(o, objects) {
  if (!isObject(o)) {o = {};}

  var args = [].slice.call(arguments);

  args.forEach(function (obj) {
    if (isObject(obj)) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          o[key] = obj[key];
        }
      }
    }
  });

  return o;
};

