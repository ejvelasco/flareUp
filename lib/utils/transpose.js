"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function transpose(array) {
  var result = array[0].map(function (column, i) {
    return array.map(function (row) {
      return row[i];
    });
  });
  return result;
}

exports.default = transpose;