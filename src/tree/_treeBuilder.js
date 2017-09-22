import {
  _chooseSplitMod,
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
  const labelsNoDuplicates = [... new Set(labels)];
  const votedLabel = voter(labels);
  leaf['label'] = votedLabel;
  if ((options['examples'] < options['minExamplesRequired']) || labelsNoDuplicates.length === 1 ) {
    return leaf;
  }
  const split = _chooseSplitMod(options, criterion);
  const splitImpurityDecrease = _impurityDecrease(options, split, criterion);
  if (splitImpurityDecrease <= options['minImpurityDecrease']) {
    return leaf;
  }
  const node = {
    depth,
    feature: split['feature'],
    threshold: split['threshold'],
    criterion: criterion(labels),
    labelByProbability: _probabilityOfLabels(options['examples'], labels),
    left: _treeBuilder(_updateExamples(options, split, 'left', depth), criterion, voter),
    right: _treeBuilder(_updateExamples(options, split, 'right', depth), criterion, voter),
    type: (depth === 1) ? 'root' : 'child',
  };
  return node;
}

export default _treeBuilder;