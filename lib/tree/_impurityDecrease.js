'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _criteria2 = require('./_criteria');

var _criteria3 = _interopRequireDefault(_criteria2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _impurityDecrease(options, split, impurity) {
  var N_C_R = split['right'].length;
  var N_C_L = split['left'].length;
  var N_C = N_C_R + N_C_L;
  var impurityRight = impurity(split['right']);
  var impurityLeft = impurity(split['left']);
  var result = N_C / options['N'] * (options['impurity'] - N_C_R / N_C * impurityRight - N_C_L / N_C * impurityLeft);
  return result;
}

exports.default = _impurityDecrease;