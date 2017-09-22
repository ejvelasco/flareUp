'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fastCsv = require('fast-csv');

var _fastCsv2 = _interopRequireDefault(_fastCsv);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function on_error(error) {
  throw error;
}

function load() {
  var file_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var on_end = arguments[1];

  var documentation = 'Please review the documentation on flareUp.load().';
  if (!file_name) {
    var message = 'No target file name was provided. ' + documentation;
    throw new Error(message);
  }
  var data = [];
  var data_stream = _fs2.default.createReadStream(file_name);
  var csv_stream = (0, _fastCsv2.default)().on('data', function (chunk) {
    var row = chunk.map(function (value) {
      var number_value = Number(value);
      return value == number_value ? number_value : value;
    });
    data.push(row);
  }).on('end', function () {
    on_end(data);
  });
  data_stream.pipe(csv_stream).on('error', on_error);
}

exports.default = load;