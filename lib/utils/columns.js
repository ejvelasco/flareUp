'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _each = require('./each');

var _each2 = _interopRequireDefault(_each);

var _length = require('./length');

var _length2 = _interopRequireDefault(_length);

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

var _transpose = require('./transpose');

var _transpose2 = _interopRequireDefault(_transpose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function columns() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments[2];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  var result = [];
  (0, _each2.default)((0, _range2.default)(start, end), function (value) {
    var column = array.map(function (row) {
      return row[value];
    });
    result.push(column);
  });
  if ((0, _length2.default)(result) === 1) {
    return result[0];
  }
  return (0, _transpose2.default)(result);
}

exports.default = columns;