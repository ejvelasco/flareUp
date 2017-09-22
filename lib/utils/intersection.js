'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _no_duplicates = require('./no_duplicates');

var _no_duplicates2 = _interopRequireDefault(_no_duplicates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function intersection(array_a, array_b) {
  var unique = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var set_b = new Set(array_b);
  var result = array_a.filter(function (element) {
    return set_b.has(element);
  });
  return unique ? (0, _no_duplicates2.default)(result) : result;
}

exports.default = intersection;