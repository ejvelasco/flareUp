'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../utils/index');

function categoriesToIntegers(array) {
  var categories = {};
  var categoryCount = 1;
  var result = array.map(function (element) {
    if (typeof categories[element] === 'number') {
      categories[element] = categoryCount;
    } else {
      categoryCount += 1;
      categories[element] = categoryCount;
    }
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

function transpose(array) {
  var result = array[0].map(function (column, i) {
    return array.map(function (row) {
      return row[i];
    });
  });
  return result;
}

function toExample(row, features, label) {
  var example = {};
  row.forEach(function (value, i) {
    var currentFeature = features[i];
    if (currentFeature === label) {
      example['label'] = value;
    } else {
      example[currentFeature] = value;
    }
  });
  return example;
}

function _format(data, features, label) {
  var firstRow = data[0];
  var examples = [];
  firstRow.forEach(function (element, i) {
    var column = (0, _index.columns)(data, i, i + 1);
    var formatted = isCategorical(column) ? categoriesToIntegers(column) : toNumbers(column);
    examples.push(formatted);
  });
  examples = transpose(examples);
  examples = examples.map(function (row) {
    return toExample(row, features, label);
  });
  examples = (0, _index.shuffle)(examples);
  return examples;
}

exports.default = _format;