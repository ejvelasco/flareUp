'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../utils/index');

function label(X, y) {
  return X.map(function (x, i) {
    return x.slice().push(y[i]);
  });
}

function random_element(array) {
  var random_index = Math.floor(Math.random() * (0, _index.length)(array));
  return array[random_index];
}

function get_random_index(array) {
  return Math.floor(Math.random() * (0, _index.length)(array));
}

function _random_subset(X, max_features) {
  var subset = [];
  var x_0 = X[0];
  var indices_used = new Set();
  (0, _index.for_each)((0, _index.range)(max_features), function () {
    var random_index = get_random_index(x_0);
    if (indices_used.has(random_index)) {
      var new_random_index = random_index;
      while (new_random_index == random_index) {
        new_random_index = get_random_index(x_0);
      }
      random_index = new_random_index;
    }
    indices_used.add(random_index);
    subset.push((0, _index.columns)(X, random_index, random_index + 1));
  });
  return (0, _index.transpose)(subset);
}

function _choose_split(classifier) {
  var max_features = classifier['max_features'];
  var best_split = null;
  var X_subset = max_features === null ? classifier['X'] : _random_subset(classifier['X'], max_features);
  var first_row = X_subset[0];
  (0, _index.for_each)(first_row, function (first_row_value, j) {
    var jth_column = (0, _index.columns)(X_subset, j, j + 1);
    var jth_values = (0, _index.no_duplicates)(jth_column);
    var pair_wise_means = jth_values.map(function (value, i) {
      var next_value = jth_values[i + 1] || value;
      var pair = [value, next_value];
      return (0, _index.mean)(pair);
    });
    (0, _index.for_each)(pair_wise_means, function (pair_wise_means, k) {
      var current_mean = pair_wise_means[k];
      var left_values = [];
      var left_labels = [];
      var right_values = [];
      var right_labels = [];
      (0, _index.for_each)(jth_column, function (jth_column, i) {
        var current_value = jth_column[i];
        var current_label = classifier['y'][i];
        if (jth_column[i] <= current_mean) {
          left_values.push(current_value);
          left_labels.push(current_label);
        } else {
          right_values.push(current_value);
          right_labels.push(current_label);
        }
      });
      var split = {
        left_values: left_values,
        left_labels: left_labels,
        right_values: right_values,
        right_labels: right_labels,
        column_index: j,
        threshold: current_mean,
        criterion: classifier['criterion'],
        cost: classifier.criterion_fn(left_labels, right_labels)
      };
      if (best_split === null || split['cost'] < best_split['cost']) {
        best_split = split;
      }
    });
  });
  return best_split;
}

exports.default = _choose_split;