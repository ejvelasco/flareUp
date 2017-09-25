'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function traverse_tree(node, example) {
  if (node['type'] === 'leaf') {
    return node['label'];
  }
  var feature_index = node['feature_index'];
  var threshold = node['threshold'];
  var result = example[feature_index] <= threshold ? traverse_tree(node['left'], example) : traverse_tree(node['right'], example);
  return result;
}

exports.default = traverse_tree;