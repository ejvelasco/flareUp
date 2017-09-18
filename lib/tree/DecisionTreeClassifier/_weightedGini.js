'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils/utils');

function _weightedGini(left, right) {
  var M_L = left.length;
  var M_R = right.length;
  var M = M_L + M_R;
  var result = M_L / M * (0, _utils.gini)(left) + M_R / M * (0, _utils.gini)(right);
  return result;
}

exports.default = _weightedGini;