"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function is_numbers_array(j) {
  return j.every(function (element) {
    return element == Number(element);
  });
}

exports.default = is_numbers_array;