import {
  _Node,
  _chooseSplit,
  _impurityDecrease,
  _probabilityOfLabels,
  _updateParameters,
} from './_utils';

function _treeBuilder(options, criterion, voter) {
  const depth = options['depth'];
  const votedLabelParent = voter(options['parentLabels']);
  const leafNodeOptions = {
    depth,
    label: votedLabelParent,
    type: 'leaf',
  };
  if (depth === options['maxDepth'] || options['examples'] === []) {
    return new _Node(leafNodeOptions);
  }
  const labels = options['examples'].map(example => example['label']);
  const votedLabel = voter(labels);
  leafNodeOptions['label'] = votedLabel;
  if ((options['examples'] < options['minExamplesRequired']) || (criterion(labels) === 0)) {
    return new _Node(leafNodeOptions);
  }
  const split = _chooseSplit(options, criterion);
  const splitImpurityDecrease = _impurityDecrease(options, split, criterion);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return new _Node(leafNodeOptions);
  }
  const nodeOptions = {
    depth,
    feature: split['feature'],
    cost: split['cost'],
    criterion: split['criterion'],
    labelByProbability: _probabilityOfLabels(options['examples'], labels),
    left: _treeBuilder(_updateParameters(options, split['left'], depth), criterion, voter),
    right: _treeBuilder(_updateParameters(options, split['right'], depth), criterion, voter),
    threshold: split['threshold'],
    type: (depth === 1) ? 'root' : 'child',
  };
  return new _Node(nodeOptions);
}

export default _treeBuilder;