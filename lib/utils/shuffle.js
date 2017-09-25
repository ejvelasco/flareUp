'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

var _each = require('./each');

var _each2 = _interopRequireDefault(_each);

var _length = require('./length');

var _length2 = _interopRequireDefault(_length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shuffle(array) {
  var copy = array.slice();
  var m = (0, _length2.default)(copy);
  var t = m;
  var k = m;
  (0, _each2.default)((0, _range2.default)(1, m), function () {
    m -= 1;
    k = Math.floor(Math.random() * m);
    t = copy[m];
    copy[m] = copy[k];
    copy[k] = t;
  });
  return copy;
}

exports.default = shuffle;