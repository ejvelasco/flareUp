"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function sum(array) {
  return array.reduce(function (a, b) {
    return a + b;
  });
}

exports.default = sum;