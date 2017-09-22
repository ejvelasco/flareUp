'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _criteria2 = require('./_criteria');

var _criteria3 = _interopRequireDefault(_criteria2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _averageAdjacentPairs(values) {
  var result = values.map(function (value, i) {
    var nextValue = values[i + 1] || value;
    var pairAverage = (value + nextValue) / 2;
    return pairAverage;
  });
  return result;
}

function _randomFeatureSubset(features, maxFeatures) {
  var featureSubset = [];
  maxFeatures.forEach(function () {
    var randomIndex = Math.floor(Math.random() * features.length);
    featureSubset.push(features[randomIndex]);
  });
}

function _splitAtValue(options, feature, value, criterion) {
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
  return split;
}

function _chooseSplitMod(options, criterion) {
  var bestSplit = null;
  var maxFeatures = options['maxFeatures'];
  var features = maxFeatures === null ? options['features'] : _randomFeatureSubset(options['features'], maxFeatures);
  features.forEach(function (feature) {
    var values = options['examples'].map(function (example) {
      return example[feature];
    });
    var valuesNoDuplicates = [].concat(_toConsumableArray(new Set(values)));
    var averages = _averageAdjacentPairs(valuesNoDuplicates);
    var splits = averages.map(function (value) {
      return _splitAtValue(options, feature, value, criterion);
    });
    // const splits = valuesNoDuplicates.map(value => _splitAtValue(options, feature, value, criterion)); 
    splits.forEach(function (split) {
      if (bestSplit === null || split['cost'] < bestSplit['cost']) {
        bestSplit = split;
      }
    });
  });
  return bestSplit;
}

exports.default = _chooseSplitMod;