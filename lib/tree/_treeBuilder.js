'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./_utils');

function _treeBuilder(options, criterion, voter) {
  var depth = options['depth'];
  var votedLabelParent = voter(options['parentLabels']);
  var leafNodeOptions = {
    depth: depth,
    label: votedLabelParent,
    type: 'leaf'
  };
  if (depth === options['maxDepth'] || options['examples'] === []) {
    return new _utils._Node(leafNodeOptions);
  }
  var labels = options['examples'].map(function (example) {
    return example['label'];
  });
  var votedLabel = voter(labels);
  leafNodeOptions['label'] = votedLabel;
  if (options['examples'] < options['minExamplesRequired'] || criterion(labels) === 0) {
    return new _utils._Node(leafNodeOptions);
  }
  var split = (0, _utils._chooseSplit)(options, criterion);
  var splitImpurityDecrease = (0, _utils._impurityDecrease)(options, split, criterion);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return new _utils._Node(leafNodeOptions);
  }
  var nodeOptions = {
    depth: depth,
    feature: split['feature'],
    cost: split['cost'],
    criterion: split['criterion'],
    labelByProbability: (0, _utils._probabilityOfLabels)(options['examples'], labels),
    left: _treeBuilder((0, _utils._updateParameters)(options, split['left'], depth), criterion, voter),
    right: _treeBuilder((0, _utils._updateParameters)(options, split['right'], depth), criterion, voter),
    threshold: split['threshold'],
    type: depth === 1 ? 'root' : 'child'
  };
  return new _utils._Node(nodeOptions);
}

exports.default = _treeBuilder;