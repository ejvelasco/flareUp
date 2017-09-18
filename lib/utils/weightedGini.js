'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gini = require('./gini');

var _gini2 = _interopRequireDefault(_gini);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _weightedGini(left, right) {
  var M_L = left.length;
  var M_R = right.length;
  var M = M_L + M_R;
  var result = M_L / M * (0, _gini2.default)(left) + M_R / M * (0, _gini2.default)(right);
  return result;
}

exports.default = _weightedGini;