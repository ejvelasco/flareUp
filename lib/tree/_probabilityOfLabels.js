'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _probabilityOfLabels(examples, labels) {
  var labelByProbability = {};
  labels.forEach(function (label) {
    var filtered = examples.filter(function (example) {
      return example['label'] === label;
    });
    var probability = filtered.length / labels.length;
    labelByProbability[label] = probability.toFixed(4);
  });
  return labelByProbability;
}

exports.default = _probabilityOfLabels;