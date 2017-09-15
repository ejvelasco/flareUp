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
  options['type'] = 'root';
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

function _buildTree(options) {
  var defaults = {
    examples: [],
    features: [],
    maxDepth: null,
    maxFeatures: null,
    minExamplesRequired: 2,
    minImpurityDecrease: 0.01
  };
  options = _setDefaults(options, defaults);
  options = _extraParameters(options, options['examples']);
  var tree = _build(options);
  return tree;
}

var LeafNode = function LeafNode(label) {
  _classCallCheck(this, LeafNode);

  this.type = 'leaf';
  this.label = label;
};

function _build(options) {
  if (options['examples'] === []) {
    var votedParentLabel = (0, _utils.mode)(options['parentLabels']);
    return new LeafNode(votedParentLabel);
  }
  var labels = options['examples'].map(function (example) {
    return example['label'];
  });
  var votedLabel = (0, _utils.mode)(labels);
  if (options['examples'] < options['minExamplesRequired'] || (0, _utils.gini)(options['examples']) === 0) {
    return new LeafNode(votedLabel);
  }
  var split = (0, _utils2._chooseSplit)(options);
  var splitImpurityDecrease = _impurityDecrease(options, split);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return new LeafNode(majorityVotedLabel);
  }
  var depth = options['depth'];
  var node = {
    depth: depth,
    feature: split['feature'],
    threshold: split['threshold'],
    gini: (0, _utils.gini)(options['examples']),
    labelByProbability: (0, _utils2._probabilityOfLabels)(options['examples'], labels),
    left: _build(_updateParameters(options, split['left'], depth)),
    right: _build(_updateParameters(options, split['right'], depth))
  };
  return node;
}

exports.default = _buildTree;