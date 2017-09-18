'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./_utils');

function _treeClassifier(options) {
  var defaults = {
    examples: [],
    features: [],
    criterion: 'gini',
    maxDepth: null,
    maxFeatures: null,
    minExamplesRequired: 2,
    minImpurityDecrease: 0
  };
  options = (0, _utils._setDefaults)(options, defaults);
  options = (0, _utils._extraParameters)(options, options['examples']);
  var tree = (0, _utils._treeBuilder)(options);
  return tree;
}

exports.default = _treeClassifier;