'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cost = require('./cost');

var _cost2 = _interopRequireDefault(_cost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function chooseSplit3(attribs, examples) {
  var splits = [];
  attribs.forEach(function (attrib) {
    var vals = examples.map(function (example) {
      return example[attrib];
    });
    vals.forEach(function (val) {
      var left = examples.filter(function (example) {
        return example[attrib] <= val;
      });
      var right = examples.filter(function (example) {
        return example[attrib] > val;
      });
      var split = {
        attrib: attrib,
        val: val,
        left: left,
        right: right,
        cost: (0, _cost2.default)(left, right)
      };
      splits.push(split);
    });
  });
  splits.sort(function (a, b) {
    return a['cost'] - b['cost'];
  });
  return splits[0];
}

exports.default = chooseSplit3;