'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function is_array(structure) {
  return toString.call(structure) === '[object Array]';
}

exports.default = is_array;