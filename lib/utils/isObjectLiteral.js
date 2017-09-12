"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function isObjectLiteral(item) {
  var result = !!item && item.constructor === Object;
  return result;
}

exports.default = isObjectLiteral;