'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _chooseSplit(features, examples, cost) {
  var splits = [];
  features.forEach(function (feature) {
    var values = examples.map(function (example) {
      return example[feature];
    });
    values.forEach(function (value) {
      var left = examples.filter(function (example) {
        return example[feature] <= value;
      });
      var right = examples.filter(function (example) {
        return example[feature] > value;
      });
      var split = {
        feature: feature,
        left: left,
        right: right,
        threshold: value,
        cost: cost(feature, left, right)
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