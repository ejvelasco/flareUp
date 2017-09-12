'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _isObjectLiteral = require('./isObjectLiteral');

var _isObjectLiteral2 = _interopRequireDefault(_isObjectLiteral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onError(error) {
  throw error;
}

function exampleToCSV(example) {
  var values = [];
  Object.keys(example).forEach(function (key) {
    var value = example[key];
    values.push(value);
  });
  var line = values.join(',') + '\n';
  return line;
}

function isFunction(item) {
  var result = typeof item === 'function';
  return result;
}

function save() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var features = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var fileName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var onEnd = arguments[3];

  var documentation = 'Please review the documentation on flareUp.save().';
  if (!data) {
    var message = 'Empty data array. ' + documentation;
    throw new Error(message);
  }
  if (!features) {
    var _message = 'Empty features array. ' + documentation;
    throw new Error(_message);
  }
  if (!fileName) {
    var _message2 = 'No target file name was provided. ' + documentation;
    throw new Error(_message2);
  }
  if (data.some(function (example) {
    return (0, _isObjectLiteral2.default)(example) === false;
  })) {
    var _message3 = 'Invalid data array elements. ' + documentation;
    throw new Error(_message3);
  }
  if (!isFunction(onEnd) && onEnd) {
    var _message4 = 'onEnd is not a function. ' + documentation;
    throw new Error(_message4);
  }
  var dataStream = _fs2.default.createWriteStream(fileName).on('error', onError);
  dataStream.write(features.join(',') + '\n');
  data.forEach(function (example) {
    dataStream.write(exampleToCSV(example));
  });
  dataStream.end(onEnd);
}

exports.default = save;