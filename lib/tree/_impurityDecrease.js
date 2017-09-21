'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _criteria2 = require('./_criteria');

var _criteria3 = _interopRequireDefault(_criteria2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _impurityDecrease(options, split, criterion) {
  var N_C_R = split['right'].length;
  var N_C_L = split['left'].length;
  var N_C = N_C_R + N_C_L;
  var criterionRight = criterion(split['rightLabels']);
  var criterionLeft = criterion(split['leftLabels']);
  var result = N_C / options['N'] * (options['impurity'] - N_C_R / N_C * criterionRight - N_C_L / N_C * criterionLeft);
  return result;
}

exports.default = _impurityDecrease;