'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../utils/index');

function random_index(array) {
  return Math.floor(Math.random() * (0, _index.length)(array));
}

function _random_subset(X, max_features) {
  var subset = [];
  var x_0 = X[0];
  var indices_used = new Set();
  (0, _index.each)((0, _index.range)(max_features), function () {
    var index = random_index(x_0);
    if (indices_used.has(index)) {
      var new_index = index;
      while (new_index == index) {
        new_index = random_index(x_0);
      }
      index = new_index;
    }
    indices_used.add(index);
    subset.push((0, _index.columns)(X, index, index + 1));
  });
  return (0, _index.transpose)(subset);
}

function _choose_split(classifier) {
  var max_features = classifier['max_features'];
  var best_split = null;
  var X_subset = max_features === null ? classifier['X'] : _random_subset(classifier['X'], max_features);
  var row = X_subset[0];
  (0, _index.each)(row, function (value, j) {
    var column = (0, _index.columns)(X_subset, j, j + 1);
    var thresholds = (0, _index.no_duplicates)(column);
    (0, _index.each)(thresholds, function (threshold) {
      var X_left = [];
      var y_left = [];
      var X_right = [];
      var y_right = [];
      (0, _index.each)(column, function (value, i) {
        var label = classifier['y'][i];
        if (value <= threshold) {
          X_left.push(X_subset[i]);
          y_left.push(label);
        } else {
          X_right.push(X_subset[i]);
          y_right.push(label);
        }
      });
      var split = {
        threshold: threshold,
        X_left: X_left,
        y_left: y_left,
        X_right: X_right,
        y_right: y_right,
        feature_index: j,
        criterion: classifier['criterion'],
        cost: classifier.criterion_fn(y_left, y_right)
      };
      if (best_split === null || split['cost'] < best_split['cost']) {
        best_split = split;
      }
    });
  });
  return best_split;
}

exports.default = _choose_split;