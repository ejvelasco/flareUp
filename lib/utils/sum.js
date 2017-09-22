"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function sum(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce(function (a, b) {
    return a + b;
  });
}

exports.default = sum;