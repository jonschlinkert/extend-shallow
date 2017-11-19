
var isObject = require('is-extendable');

module.exports = function extend(a, b) {
  if (!a) return {};
  if (!b) return a;
  var len = arguments.length - 1, i = 1;
  while (len--) {
    var obj = arguments[i++];
    if (isObject(obj)) {
      assign(a, obj);
    }
  }
  return a;
};

function assign(o, obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      o[key] = obj[key];
    }
  }
  return o;
}
