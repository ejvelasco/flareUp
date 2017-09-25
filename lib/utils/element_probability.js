'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _each = require('./each');

var _each2 = _interopRequireDefault(_each);

var _length = require('./length');

var _length2 = _interopRequireDefault(_length);

var _no_duplicates = require('./no_duplicates');

var _no_duplicates2 = _interopRequireDefault(_no_duplicates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function element_probability(x) {
  var probabilities = {};
  var x_no_duplicates = (0, _no_duplicates2.default)(x);
  (0, _each2.default)(x_no_duplicates, function (x_no_duplicates, i) {
    var current_element = x_no_duplicates[i];
    var equal_elements = x_no_duplicates.filter(function (element) {
      return element === current_element;
    });
    var probability = (0, _length2.default)(equal_elements) / (0, _length2.default)(x);
    probabilities[current_element] = probability;
  });
  return probabilities;
}

exports.default = element_probability;