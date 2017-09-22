'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sum = require('./sum');

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function g(array) {
  if (array.length == 0) {
    return 0;
  }
  var arrayNoDuplicates = [].concat(_toConsumableArray(new Set(array)));
  var probabilities = arrayNoDuplicates.map(function (value) {
    var elementsWithValue = array.filter(function (element) {
      return element === value;
    });
    var probability = (elementsWithValue.length / array.length) ** 2;
    return probability;
  });
  var probabilitySum = probabilities.reduce(function (a, b) {
    return a + b;
  });
  var result = 1 - probabilitySum;
  return result;
}

function gini(left, right) {
  if (!right) {
    return g(left);
  }
  var M_L = left.length;
  var M_R = right.length;
  var M = M_L + M_R;
  var result = M_L / M * g(left) + M_R / M * g(right);
  return result;
}

exports.default = gini;