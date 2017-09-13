'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fastCsv = require('fast-csv');

var _fastCsv2 = _interopRequireDefault(_fastCsv);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onError(error) {
  throw error;
}

function load() {
  var fileName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var onEnd = arguments[1];

  var documentation = 'Please review the documentation on flareUp.load().';
  if (!fileName) {
    var message = 'No target file name was provided. ' + documentation;
    throw new Error(message);
  }
  var data = [];
  var dataStream = _fs2.default.createReadStream(fileName);
  var csvStream = (0, _fastCsv2.default)().on('data', function (chunk) {
    data.push(chunk);
  }).on('end', function () {
    onEnd(data);
  });
  dataStream.pipe(csvStream).on('error', onError);
}

exports.default = load;