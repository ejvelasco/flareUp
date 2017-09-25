'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _length = require('./length');

var _length2 = _interopRequireDefault(_length);

var _shuffle = require('./shuffle');

var _shuffle2 = _interopRequireDefault(_shuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function split_train_test(options) {
  var index = Math.floor(options['train_size'] * (0, _length2.default)(options['X']));
  var X = options['X'];
  var y = options['y'];
  var X_train = X.slice(0, index);
  var X_test = X.slice(index, (0, _length2.default)(X));
  var y_train = y.slice(0, index);
  var y_test = y.slice(index, (0, _length2.default)(y));
  return [X_train, X_test, y_train, y_test];
}

exports.default = split_train_test;