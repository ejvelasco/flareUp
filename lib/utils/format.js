'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shuffle = require('./shuffle');

var _shuffle2 = _interopRequireDefault(_shuffle);

var _columns = require('./columns');

var _columns2 = _interopRequireDefault(_columns);

var _transpose = require('./transpose');

var _transpose2 = _interopRequireDefault(_transpose);

var _fillMissingValues = require('./fillMissingValues');

var _fillMissingValues2 = _interopRequireDefault(_fillMissingValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function categoriesToIntegers(array) {
  var categories = {};
  var categoryCount = 0;
  array.forEach(function (element) {
    if (typeof categories[element] === 'undefined') {
      categories[element] = categoryCount;
      categoryCount += 1;
    }
  });
  var result = array.map(function (element) {
    return categories[element];
  });
  return result;
}

function toNumbers(array) {
  var result = array.map(function (element) {
    return Number(element);
  });
  return result;
}

function isCategorical(array) {
  var result = array.some(function (element) {
    return Number(element) != element;
  });
  return result;
}

function toExampleObject(row, i, features, labels) {
  var example = {};
  row.forEach(function (value, i) {
    var currentFeature = features[i];
    example[currentFeature] = value;
  });
  example['label'] = labels[i];
  return example;
}

function format(features, examples, labels) {
  var firstRow = examples[0];
  var processed = [];
  firstRow.forEach(function (element, i) {
    var column = (0, _columns2.default)(examples, i, i + 1);
    column = isCategorical(column) ? categoriesToIntegers(column) : toNumbers(column);
    processed.push(column);
  });
  examples = (0, _transpose2.default)(processed);
  labels = categoriesToIntegers(labels);
  examples = examples.map(function (row, i) {
    return toExampleObject(row, i, features, labels);
  });
  return (0, _shuffle2.default)(examples);
}

exports.default = format;