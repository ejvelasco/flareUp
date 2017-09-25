'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

function each(structure, fn) {
  if ((0, _index.is_array)(structure)) {
    structure.forEach(function (element, i) {
      fn(structure[i], i);
    });
  } else if ((0, _index.is_object_literal)(structure)) {
    Object.keys(structure).forEach(function (key) {
      fn(key, structure[key]);
    });
  }
}

exports.default = each;