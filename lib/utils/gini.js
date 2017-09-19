'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sum = require('./sum');

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function gini() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  if (arrays.length > 1) {
    var M_I = arrays.map(function (array) {
      return array.length;
    });
    var M = (0, _sum2.default)(M_I);
    var terms = M_I.map(function (M_i, i) {
      return M_i / M * gini(arrays[i]);
    });
    var _result = (0, _sum2.default)(terms);
    return _result;
  }
  var array = arrays[0];
  var arrayNoDuplicates = [].concat(_toConsumableArray(new Set(array)));
  var probabilities = arrayNoDuplicates.map(function (value) {
    var elementsWithValue = array.filter(function (element) {
      return element === value;
    });
    var probability = (elementsWithValue.length / array.length) ** 2;
    return probability;
  });
  var probabilitySum = (0, _sum2.default)(probabilities);
  var result = 1 - probabilitySum;
  return result;
}

exports.default = gini;