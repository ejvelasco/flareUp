'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sum = require('./sum');

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mean(array) {
  return (0, _sum2.default)(array) / array.length;
}

exports.default = mean;