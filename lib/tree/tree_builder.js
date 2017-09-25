'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _index = require('../utils/index');

function tree_builder(classifier) {
  var depth = classifier['depth'];
  var leaf = {
    depth: depth,
    label: classifier['voted_y_parent'],
    type: 'leaf'
  };
  if (classifier['depth'] === classifier['max_depth'] || classifier['X'] === []) {
    return leaf;
  }
  var voted_label = classifier.voter_fn(classifier['y']);
  var labels_no_duplicates = (0, _index.no_duplicates)(classifier['y']);
  leaf['label'] = voted_label;
  if (classifier['X'] < classifier['min_examples_required'] || (0, _index.length)(labels_no_duplicates) === 1) {
    return leaf;
  }
  var split = (0, _utils.choose_split)(classifier);
  var split_impurity_decrease = (0, _utils.impurity_decrease)(classifier, split);
  if (split_impurity_decrease < classifier['min_impurity_decrease']) {
    return leaf;
  }
  var node = {
    depth: depth,
    feature_index: split['feature_index'],
    threshold: split['threshold'],
    left: tree_builder((0, _utils.update_classifier)(classifier, depth, split, 'left')),
    right: tree_builder((0, _utils.update_classifier)(classifier, depth, split, 'right')),
    type: depth === 1 ? 'root' : 'child'
  };
  return node;
}

exports.default = tree_builder;