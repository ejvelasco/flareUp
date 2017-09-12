'use strict';

var _probabilityOfLabels2 = require('../probabilityOfLabels');

var _probabilityOfLabels3 = _interopRequireDefault(_probabilityOfLabels2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var gini = require('./gini');
var chooseSplit = require('./chooseSplit');
var methodsPath = require('./methodsPath');
var mode = require(methodsPath + 'mode');


function CART() {
  var examples = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var def = arguments[1];

  var labels = examples.map(function (example) {
    return example['label'];
  });
  var labelsNoDups = [].concat(_toConsumableArray(new Set(labels)));
  if (examples.length === 0) {
    return def;
  }
  if (gini(examples) === 0) {
    return labelsNoDups[0];
  }
  var attribs = Object.keys(examples[0]).filter(function (attrib) {
    return attrib !== 'label';
  });
  var split = chooseSplit(attribs, examples, labelsNoDups);
  var tree = {
    split: {
      attrib: split['attrib'],
      val: split['val']
    },
    probs: (0, _probabilityOfLabels3.default)(examples, labelsNoDups),
    left: CART(split['left'], def),
    right: CART(split['right'], def)
  };
  return tree;
}

module.exports = CART;