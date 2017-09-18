'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils/utils');

var _utils2 = require('../_utils');

var _utils3 = require('./_utils');

function _treeBuilder(options) {
  var depth = options['depth'];
  var votedLabelParent = (0, _utils.mode)(options['parentLabels']);
  var leafNodeOptions = {
    depth: depth,
    label: votedLabelParent,
    type: 'leaf'
  };
  if (depth === options['maxDepth'] || options['examples'] === []) {
    return new _utils2._Node(leafNodeOptions);
  }
  var labels = options['examples'].map(function (example) {
    return example['label'];
  });
  var votedLabel = (0, _utils.mode)(labels);
  leafNodeOptions['label'] = votedLabel;
  if (options['examples'] < options['minExamplesRequired'] || (0, _utils.gini)(options['examples']) === 0) {
    return new _utils2._Node(leafNodeOptions);
  }
  var split = (0, _utils2._chooseSplit)(options);
  var splitImpurityDecrease = (0, _utils2._impurityDecrease)(options, split);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return new _utils2._Node(leafNodeOptions);
  }
  var nodeOptions = {
    depth: depth,
    feature: split['feature'],
    cost: split['cost'],
    criterion: split['criterion'],
    labelByProbability: (0, _utils2._probabilityOfLabels)(options['examples'], labels),
    left: _treeBuilder((0, _utils3._updateParameters)(options, split['left'], depth)),
    right: _treeBuilder((0, _utils3._updateParameters)(options, split['right'], depth)),
    threshold: split['threshold'],
    type: depth === 1 ? 'root' : 'child'
  };
  return new _utils2._Node(nodeOptions);
}

exports.default = _treeBuilder;