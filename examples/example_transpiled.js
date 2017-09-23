'use strict';

var _index = require('../lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isNumbersArray(j) {
  return j.every(function (element) {
    return element == Number(element);
  });
}

function format(X, label_encoder) {
  var first_row = X[0];
  var result = first_row.map(function (values, i) {
    var j = _index2.default.columns(X, i, i + 1);
    var j_processed = isNumbersArray(j) ? j : label_encoder.fit_transform(j);
    return j_processed;
  });
  return _index2.default.transpose(result);
}

function on_load(data) {
  var label_encoder = new _index2.default.preprocessing.LabelEncoder();
  var classifier = new _index2.default.tree.DecisionTreeClassifier();
  var data_non_empty = data.filter(function (row) {
    return !row.some(function (value) {
      return value === '?';
    });
  });
  var data_encoded = format(data_non_empty, label_encoder);
  var n_features = data_encoded[0].length;
  var X = _index2.default.columns(data_encoded, 0, n_features - 1);
  var y = _index2.default.columns(data_encoded, n_features - 1, n_features);
  console.log(classifier.fit({
    X: X,
    y: y
  }));
}

_index2.default.load('iris.csv', on_load);
