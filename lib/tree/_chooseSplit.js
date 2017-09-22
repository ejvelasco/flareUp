'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../utils/index');

var _criteria2 = require('./_criteria');

var _criteria3 = _interopRequireDefault(_criteria2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _chooseSplit(options, criterion) {
  var splits = [];
  var maxFeatures = options['maxFeatures'];
  var features = options['features'];
  if (maxFeatures) {
    var featureSubset = [];
    (0, _index.range)(maxFeatures).forEach(function () {
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
    valuesNoDuplicates.forEach(function (value) {
      var left = options['examples'].filter(function (example) {
        return example[feature] <= value;
      });
      var right = options['examples'].filter(function (example) {
        return example[feature] > value;
      });
      var leftLabels = left.map(function (example) {
        return example['label'];
      });
      var rightLabels = right.map(function (example) {
        return example['label'];
      });
      var split = {
        feature: feature,
        left: left,
        leftLabels: leftLabels,
        right: right,
        rightLabels: rightLabels,
        cost: criterion(leftLabels, rightLabels),
        criterion: options['criterion'],
        threshold: value
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