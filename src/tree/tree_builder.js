import { choose_split, impurity_decrease, update_classifier } from './utils';
import { no_duplicates, length } from '../utils/index';

function tree_builder(classifier) {
  const depth = classifier['depth'];
  const leaf = {
    depth,
    label: classifier['y_parent_default'],
    type: 'leaf',
  };
  if (classifier['depth'] === classifier['max_depth'] || classifier['X'] === []) {
    return leaf;
  }
  const voted_label = classifier.voter_fn(classifier['y']);
  const labels_no_duplicates = no_duplicates(classifier['y']);
  leaf['label'] = voted_label;
  if (classifier['X'] < classifier['min_examples_required'] || length(labels_no_duplicates) === 1) {
    return leaf;
  }
  const split = choose_split(classifier);
  const split_impurity_decrease = impurity_decrease(classifier, split);
  if (split_impurity_decrease < classifier['min_impurity_decrease']) {
    return leaf;
  }
  const node = {
    depth,
    feature_index: split['feature_index'],
    threshold: split['threshold'],
    left: tree_builder(update_classifier(classifier, depth, split, 'left')),
    right: tree_builder(update_classifier(classifier, depth, split, 'right')),
    type: (depth === 1) ? 'root' : 'child',
  };
  return node;
}

export default tree_builder;