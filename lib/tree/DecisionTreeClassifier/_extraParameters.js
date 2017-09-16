'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils/utils');

function _extraParameters(options, examples) {
  options['N'] = examples.length;
  options['depth'] = 1;
  options['impurity'] = (0, _utils.gini)(examples);
  return options;
}

exports.default = _extraParameters;