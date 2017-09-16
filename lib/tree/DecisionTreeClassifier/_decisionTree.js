'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils2 = require('./_utils');

var _utils3 = _interopRequireDefault(_utils2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _decisionTree(options) {
  var defaults = {
    examples: [],
    features: [],
    maxDepth: null,
    maxFeatures: null,
    minExamplesRequired: 2,
    minImpurityDecrease: 0
  };
  options = _utils3.default._setDefaults(options, defaults);
  options = _utils3.default._extraParameters(options, options['examples']);
  var tree = _utils3.default._treeBuilder(options);
  return tree;
}

exports.default = _decisionTree;