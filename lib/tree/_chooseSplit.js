'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var _utils2 = require('./DecisionTreeClassifier/_utils');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _chooseSplit(options) {
  var splits = [];
  var maxFeatures = options['maxFeatures'];
  var features = options['features'];
  if (maxFeatures) {
    var featureSubset = [];
    (0, _utils.range)(maxFeatures).forEach(function () {
      var randomIndex = Math.floor(Math.random() * features.length);
      featureSubset.push(features[randomIndex]);
    });
    features = featureSubset;
  }
  features.forEach(function (feature) {
    var values = options['examples'].map(function (example) {
      return example[feature];
    });
    var valuesNoDuplicates = [].concat(_toConsumableArray(new Set(values)));
    var averages = valuesNoDuplicates.map(function (value, i) {
      var nextValue = valuesNoDuplicates[i + 1] || value;
      var result = (value + nextValue) / 2;
      return result;
    });
    averages.forEach(function (value) {
      var left = options['examples'].filter(function (example) {
        return example[feature] <= value;
      });
      var right = options['examples'].filter(function (example) {
        return example[feature] > value;
      });
      var split = {
        feature: feature,
        left: left,
        right: right,
        threshold: value,
        cost: (0, _utils2._cost)(left, right)
      };
      splits.push(split);
    });
  });
  splits.sort(function (a, b) {
    return a['cost'] - b['cost'];
  });
  return splits[0];
}

exports.default = _chooseSplit;