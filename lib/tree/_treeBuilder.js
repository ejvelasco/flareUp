'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./_utils');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _treeBuilder(options, criterion, voter) {
  var depth = options['depth'];
  var votedLabelParent = voter(options['parentLabels']);
  var leaf = {
    depth: depth,
    label: votedLabelParent,
    type: 'leaf'
  };
  if (depth === options['maxDepth'] || options['examples'] === []) {

    return leaf;
  }
  var labels = options['examples'].map(function (example) {
    return example['label'];
  });
  var labelsNoDuplicates = [].concat(_toConsumableArray(new Set(labels)));
  var votedLabel = voter(labels);
  leaf['label'] = votedLabel;
  if (options['examples'] < options['minExamplesRequired'] || labelsNoDuplicates.length === 1) {
    return leaf;
  }
  var split = (0, _utils._chooseSplitMod)(options, criterion);
  var splitImpurityDecrease = (0, _utils._impurityDecrease)(options, split, criterion);
  if (splitImpurityDecrease <= options['minImpurityDecrease']) {
    return leaf;
  }
  var node = {
    depth: depth,
    feature: split['feature'],
    threshold: split['threshold'],
    criterion: criterion(labels),
    labelByProbability: (0, _utils._probabilityOfLabels)(options['examples'], labels),
    left: _treeBuilder((0, _utils._updateExamples)(options, split, 'left', depth), criterion, voter),
    right: _treeBuilder((0, _utils._updateExamples)(options, split, 'right', depth), criterion, voter),
    type: depth === 1 ? 'root' : 'child'
  };
  return node;
}

exports.default = _treeBuilder;