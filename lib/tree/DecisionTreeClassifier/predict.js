'use strict';

function _traverseTree(node, example) {
  if (node['type'] === 'leaf') {
    return node['label'];
  }
  var feature = node['feature'];
  var threshold = node['threshold'];
  var result = example[feature] <= threshold ? _traverseTree(node['left'], example) : _traverseTree(node['right'], example);
  return result;
}

function predict(example) {
  var rootNode = this['rootNode'];
  var prediction = _traverseTree(rootNode, example);
  return prediction;
}

module.exports = predict;