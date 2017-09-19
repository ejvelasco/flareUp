'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rows() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments[2];

  if (end === undefined) {
    end = start;
    start = 0;
  }
  var result = [];
  (0, _range2.default)(start, end).forEach(function (i) {
    result.push(array.filter(function (row, j) {
      return j === i;
    })[0]);
  });
  if (result.length === 1) {
    return result[0];
  }
  return result;
}

exports.default = rows;