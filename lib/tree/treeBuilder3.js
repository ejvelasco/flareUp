'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chooseSplit = require('./chooseSplit3');

var _chooseSplit2 = _interopRequireDefault(_chooseSplit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import mode from '../utils/utils';

function treeBuilder3(examples, def) {
  var labels = examples.map(function (example) {
    return example['label'];
  });
  var labelsNoDups = [].concat(_toConsumableArray(new Set(labels)));
  if (labelsNoDups.length === 1) {
    return labelsNoDups[0];
  }
  var attribs = Object.keys(examples[0]).filter(function (attrib) {
    return attrib !== 'label';
  });
  var split = (0, _chooseSplit2.default)(attribs, examples, labelsNoDups);
  var tree = {
    split: {
      attrib: split['attrib'],
      val: split['val']
    },
    left: treeBuilder3(split['left'], def),
    right: treeBuilder3(split['right'], def)
  };
  return tree;
}

exports.default = treeBuilder3;