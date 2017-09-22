'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mean = require('./mean');

var _mean2 = _interopRequireDefault(_mean);

var _mode = require('./mode');

var _mode2 = _interopRequireDefault(_mode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isIntArray(array) {
  var result = array.every(function (element) {
    return element === Math.floor(element);
  });
  return result;
}

function replaceMissing(array, missing, filler) {
  var result = array.map(function (element) {
    return element === missing ? filler : element;
  });
  return result;
}

function fillMissingValues(array, missing) {
  var arrayMode = (0, _mode2.default)(array);
  var arrayMean = (0, _mean2.default)(array);
  var result = void 0;
  if (isIntArray(array)) {
    result = replaceMissing(array, missing, arrayMode);
  } else {
    result = replaceMissing(array, missing, arrayMean);
  }
  return result;
}

exports.default = fillMissingValues;