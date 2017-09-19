'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

var _shuffle = require('./shuffle');

var _shuffle2 = _interopRequireDefault(_shuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function setDefaults(options, defaults) {
  Object.keys(defaults).forEach(function (key) {
    if (typeof options[key] !== 'undefined') {
      defaults[key] = options[key];
    }
  });
  return defaults;
}

function split(options) {
  var defaults = {
    examples: [],
    fractionToTrain: 0.8,
    stratified: true
  };
  var documentation = 'Please review the flareUp.split docs';
  options = setDefaults(options, defaults);
  if (!options['examples']) {
    var message = 'Empty data array. ' + documentation;
    throw new Error(message);
  }
  var _options = options,
      examples = _options.examples,
      fractionToTrain = _options.fractionToTrain,
      stratified = _options.stratified;

  if (stratified === true) {
    var numberOfExamples = examples.length;
    var labels = examples.map(function (example) {
      return example['label'];
    });
    var labelsNoDuplicates = [].concat(_toConsumableArray(new Set(labels)));
    var groupedByLabel = [];
    labelsNoDuplicates.forEach(function (label) {
      var group = examples.filter(function (example) {
        return example['label'] === label;
      });
      groupedByLabel.push(group);
    });
    var labelRatios = groupedByLabel.map(function (group) {
      return group.length / numberOfExamples;
    });
    var trainExamples = [];
    labelRatios.forEach(function (ratio, i) {
      var representativeSize = Math.floor(ratio * fractionToTrain * numberOfExamples);
      var group = groupedByLabel[i];
      (0, _range2.default)(representativeSize).forEach(function () {
        var randomIndex = Math.floor(Math.random() * group.length);
        trainExamples.push(group[randomIndex]);
        group.splice(randomIndex, 1);
      });
      groupedByLabel[i] = group;
    });
    var testExamples = groupedByLabel.reduce(function (a, b) {
      return a.concat(b);
    });
    return [trainExamples, testExamples];
  } else {
    var i = Math.floor(examples.length * fractionToTrain);
    return [examples.slice(0, i), examples.slice(i, examples.length)];
  }
}

exports.default = split;