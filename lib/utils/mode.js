"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function mode() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!array) {
    return null;
  }
  if (array.length === 1) {
    return array[0];
  }
  var seen = {};
  var indexMode = 1;
  var countMode = 1;
  array.forEach(function (element, i) {
    if (seen[element]) {
      seen[element]++;
      if (seen[element] > countMode) {
        indexMode = i;
        countMode = seen[element];
      }
    } else {
      seen[element] = 1;
    }
  });
  return array[indexMode];
}

exports.default = mode;