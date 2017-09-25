'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../utils/index');

function set_defaults(options, defaults) {
  (0, _index.each)(options, function (key, value) {
    defaults[key] = value;
  });
  return defaults;
}

exports.default = set_defaults;