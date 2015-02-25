'use strict';

module.exports = function extend(o, objects) {
  if (!o || !objects) { return o || {}; }

  var len = arguments.length - 1;
  for (var i = 0; i < len; i++) {
    var obj = arguments[i + 1];

    for (var key in obj) {
      o[key] = obj[key];
    }
  }
  return o;
};
