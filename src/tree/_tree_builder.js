import {
  _choose_split,
  _impurityDecrease,
  _probabilityOfLabels,
  _updateExamples,
  _updateOptions,
} from './_utils';

import {
  no_duplicates,
  length,
} from '../utils/index';

function _tree_builder() {
  const leaf = {
    depth: this['depth'],
    label: this['voted_y_parent'],
    type: 'leaf',
  };
  if (this['depth'] === this['max_depth'] || this['X'] === []) {
    return leaf;
  }
  const voted_label = this.voter_fn(this['y']);
  const labels_no_duplicates = no_duplicates(this['y']);
  if (this['X'] < this['min_examples_required'] || length(labels_no_duplicates) === 1) {
    leaf['label'] = voted_label;
    return leaf;
  }
  const split = _choose_split(this);
  return split;
  // console.log(split);
  // const depth = options['depth'];
  // const votedLabelParent = voter(options['parentLabels']);
  // const leaf = {
  //   depth,
  //   label: votedLabelParent,
  //   type: 'leaf',
  // };
  // if (depth === options['maxDepth'] || options['examples'] === []) {
  //   return leaf;
  // }
  // const labels = options['examples'].map(example => example['label']);
  // const labelsNoDuplicates = [... new Set(labels)];
  // const votedLabel = voter(labels);
  // leaf['label'] = votedLabel;
  // if ((options['examples'] < options['minExamplesRequired']) || labelsNoDuplicates.length === 1 ) {
  //   return leaf;
  // }
  // const split = _chooseSplitMod(options, criterion);
  // const splitImpurityDecrease = _impurityDecrease(options, split, criterion);
  // if (splitImpurityDecrease <= options['minImpurityDecrease']) {
  //   return leaf;
  // }
  // const node = {
  //   depth,
  //   feature: split['feature'],
  //   threshold: split['threshold'],
  //   criterion: criterion(labels),
  //   labelByProbability: _probabilityOfLabels(options['examples'], labels),
  //   left: _treeBuilder(_updateExamples(options, split, 'left', depth), criterion, voter),
  //   right: _treeBuilder(_updateExamples(options, split, 'right', depth), criterion, voter),
  //   type: (depth === 1) ? 'root' : 'child',
  // };
  // return node;
}

export default _tree_builder;