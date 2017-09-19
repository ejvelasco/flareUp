import {
  _chooseSplit,
  _impurityDecrease,
  _probabilityOfLabels,
  _updateExamples,
  _updateOptions,
} from './_utils';

function _treeBuilder(options, criterion, voter) {
  const depth = options['depth'];
  const votedLabelParent = voter(options['parentLabels']);
  const leaf = {
    depth,
    label: votedLabelParent,
    type: 'leaf',
  };
  if (depth === options['maxDepth'] || options['examples'] === []) {
    
    return leaf;
  }
  const labels = options['examples'].map(example => example['label']);
  const votedLabel = voter(labels);
  leaf['label'] = votedLabel;
  if ((options['examples'] < options['minExamplesRequired']) || (criterion(labels) === 0)) {
    return leaf;
  }
  const split = _chooseSplit(options, criterion);
  const splitImpurityDecrease = _impurityDecrease(options, split, criterion);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return leaf;
  }
  options['depth'] += 1;
  const node = {
    depth,
    feature: split['feature'],
    cost: split['cost'],
    criterion: split['criterion'],
    labelByProbability: _probabilityOfLabels(options['examples'], labels),
    left: _treeBuilder(_updateExamples(options, split, 'left'), criterion, voter),
    right: _treeBuilder(_updateExamples(options, split, 'right'), criterion, voter),
    threshold: split['threshold'],
    type: (depth === 1) ? 'root' : 'child',
  };
  return node;
}

export default _treeBuilder;