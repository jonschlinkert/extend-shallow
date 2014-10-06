'use strict';

/**
 * Extend the target `obj` with the properties of other objects.
 *
 * @param  {Object}  `obj` The target object. Pass an empty object to shallow clone.
 * @param  {Objects}
 * @return {Object}
 */

module.exports = function extend(o) {
  var args = [].slice.call(arguments, 1);

  if (o == null) {
    return {};
  }

  var len = args.length;
  if (len === 0) {
    return o;
  }

  for (var i = 0; i < len; i++) {
    var obj = args[i];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        o[key] = obj[key];
      }
    }
  }
  return o;
};
