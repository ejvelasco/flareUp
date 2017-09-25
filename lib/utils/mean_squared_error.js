'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mean = require('./mean');

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mean_squared_error(examples) {
  var labels = examples.map(function (example) {
    return example['label'];
  });
  var predictedValue = (0, _mean2.default)(labels);
  var errors = labels.map(function (label) {
    return predictedValue - label;
  });
  var squareErrors = errors.map(function (error) {
    return error ** 2;
  });
  var result = (0, _mean2.default)(squareErrors);
  return result;
}

exports.default = mean_squared_error;