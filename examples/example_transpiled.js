'use strict';

var _index = require('../lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function on_load(data) {
  data = data.filter(function (row) {
    return !row.some(function (value) {
      return value === '?';
    });
  });
  var n_features = data[0].length;
  var X = _index2.default.columns(data, 0, n_features - 1);
  var y = _index2.default.columns(data, n_features - 1, n_features);
  console.log(X);
  console.log(y);
}

_index2.default.load('iris.csv', on_load);
