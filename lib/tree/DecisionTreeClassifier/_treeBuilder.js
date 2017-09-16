'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils2 = require('../../utils/utils');

var _utils3 = require('../_utils');

var _utils4 = require('./_utils');

var _utils5 = _interopRequireDefault(_utils4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _treeBuilder(options) {
  var depth = options['depth'];
  var votedLabelParent = (0, _utils2.mode)(options['parentLabels']);
  if (depth === options['maxDepth'] || options['examples'] === []) {
    return new _utils5.default._LeafNode(votedLabelParent, depth);
  }
  var labels = options['examples'].map(function (example) {
    return example['label'];
  });
  var votedLabel = (0, _utils2.mode)(labels);
  if (options['examples'] < options['minExamplesRequired'] || (0, _utils2.gini)(options['examples']) === 0) {
    return new _utils5.default._LeafNode(votedLabel, depth);
  }
  var split = (0, _utils3._chooseSplit)(options);
  var splitImpurityDecrease = _utils5.default._impurityDecrease(options, split);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return new _utils5.default._LeafNode(votedLabel, depth);
  }
  var nodeOptions = {
    depth: depth,
    feature: split['feature'],
    gini: (0, _utils2.gini)(options['examples']),
    labelByProbability: (0, _utils3._probabilityOfLabels)(options['examples'], labels),
    left: _treeBuilder(_utils5.default._updateParameters(options, split['left'], depth)),
    right: _treeBuilder(_utils5.default._updateParameters(options, split['right'], depth)),
    threshold: split['threshold'],
    type: depth === 1 ? 'root' : 'child'
  };
  return new _utils5.default._Node(nodeOptions);
}

exports.default = _treeBuilder;