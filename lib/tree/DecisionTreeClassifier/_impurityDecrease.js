'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils/utils');

function _impurityDecrease(options, split) {
  var N_C_R = split['right'].length;
  var N_C_L = split['left'].length;
  var N_C = N_C_R + N_C_L;
  var impurityRight = (0, _utils.gini)(split['right']);
  var impurityLeft = (0, _utils.gini)(split['left']);
  var result = N_C / options['N'] * (options['impurity'] - N_C_R / N_C * impurityRight - N_C_L / N_C * impurityLeft);
  return result;
}

exports.default = _impurityDecrease;