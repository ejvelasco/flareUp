'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils/utils');

var _utils2 = require('../_utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _setDefaults(options, defaults) {
  Object.keys(defaults).forEach(function (key) {
    if (typeof options[key] !== 'undefined') {
      defaults[key] = options[key];
    }
  });
  return defaults;
}

function _impurityDecrease(options, split) {
  var N_C_R = split['right'].length;
  var N_C_L = split['left'].length;
  var N_C = N_C_R + N_C_L;
  var impurityRight = (0, _utils.gini)(split['right']);
  var impurityLeft = (0, _utils.gini)(split['left']);
  var result = N_C / options['N'] * (options['impurity'] - N_C_R / N_C * impurityRight - N_C_L / N_C * impurityLeft);
  return result;
}

function _extraParameters(options, examples) {
  options['N'] = examples.length;
  options['depth'] = 1;
  options['impurity'] = (0, _utils.gini)(examples);
  return options;
}

function _updateParameters(options, examples, depth, nodeType) {
  options['depth'] = depth + 1;
  options['examples'] = examples;
  options['parentLabels'] = examples.map(function (example) {
    return example['label'];
  });
  return options;
}

function _decisionTree(options) {
  var defaults = {
    examples: [],
    features: [],
    maxDepth: null,
    maxFeatures: null,
    minExamplesRequired: 2,
    minImpurityDecrease: 0
  };
  options = _setDefaults(options, defaults);
  options = _extraParameters(options, options['examples']);
  var tree = _treeBuilder(options);
  return tree;
}

var _LeafNode = function _LeafNode(label, depth) {
  _classCallCheck(this, _LeafNode);

  this.type = 'leaf';
  this.label = label;
  this.depth = depth;
};

var _Node = function _Node(options) {
  var _this = this;

  _classCallCheck(this, _Node);

  Object.keys(options).forEach(function (key) {
    _this[key] = options[key];
  });
};

function _treeBuilder(options) {
  var depth = options['depth'];
  var votedLabelParent = (0, _utils.mode)(options['parentLabels']);
  if (depth === options['maxDepth'] || options['examples'] === []) {
    return new _LeafNode(votedLabelParent, depth);
  }
  var labels = options['examples'].map(function (example) {
    return example['label'];
  });
  var votedLabel = (0, _utils.mode)(labels);
  if (options['examples'] < options['minExamplesRequired'] || (0, _utils.gini)(options['examples']) === 0) {
    return new _LeafNode(votedLabel, depth);
  }
  var split = (0, _utils2._chooseSplit)(options);
  var splitImpurityDecrease = _impurityDecrease(options, split);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return new _LeafNode(votedLabel, depth);
  }
  var nodeOptions = {
    depth: depth,
    feature: split['feature'],
    gini: (0, _utils.gini)(options['examples']),
    labelByProbability: (0, _utils2._probabilityOfLabels)(options['examples'], labels),
    left: _treeBuilder(_updateParameters(options, split['left'], depth)),
    right: _treeBuilder(_updateParameters(options, split['right'], depth)),
    threshold: split['threshold'],
    type: depth === 1 ? 'root' : 'child'
  };
  return new _Node(nodeOptions);
}

exports.default = _decisionTree;