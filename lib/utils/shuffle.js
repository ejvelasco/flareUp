'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shuffle(array) {
  var m = array.length;
  var t = m;
  var i = m;
  (0, _range2.default)(1, m).forEach(function () {
    m -= 1;
    i = Math.floor(Math.random() * m);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  });
  return array;
}

exports.default = shuffle;