'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _traverseTree(node, example) {
  if (node['type'] === 'leaf') {
    return node['label'];
  }
  var feature = node['feature'];
  var threshold = node['threshold'];
  var result = example[feature] <= threshold ? _traverseTree(node['left'], example) : _traverseTree(node['right'], example);
  return result;
}

exports.default = _traverseTree;