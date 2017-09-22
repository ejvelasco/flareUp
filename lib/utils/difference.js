'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _no_duplicates = require('./no_duplicates');

var _no_duplicates2 = _interopRequireDefault(_no_duplicates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function difference(array_a, array_b) {
  var unique = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var long = array_a >= array_b ? array_a : array_b;
  var short = array_a >= array_b ? array_b : array_a;
  var set_short = new Set(short);
  var result = long.filter(function (element) {
    return !set_short.has(element);
  });
  return unique ? (0, _no_duplicates2.default)(result) : result;
}

exports.default = difference;