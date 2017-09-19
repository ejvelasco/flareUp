'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _probabilityOfLabels(examples, labels) {
  var labelByProbability = {};
  var labelsNoDuplicates = [].concat(_toConsumableArray(new Set(labels)));
  labelsNoDuplicates.forEach(function (label) {
    var filtered = examples.filter(function (example) {
      return example['label'] === label;
    });
    var probability = filtered.length / examples.length;
    labelByProbability[label] = probability;
  });
  return labelByProbability;
}

exports.default = _probabilityOfLabels;