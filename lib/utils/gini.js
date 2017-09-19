'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function gini(examples) {
  var labels = examples.map(function (example) {
    return example['label'];
  });
  var labelsNoDuplicates = [].concat(_toConsumableArray(new Set(labels)));
  var probabilitySquaredSum = 0;
  labelsNoDuplicates.forEach(function (label) {
    var examplesWithLabel = examples.filter(function (example) {
      return example['label'] === label;
    });
    var labelProbability = examplesWithLabel.length / examples.length;
    probabilitySquaredSum += labelProbability ** 2;
  });
  var result = 1 - probabilitySquaredSum;
  return result;
}

exports.default = gini;