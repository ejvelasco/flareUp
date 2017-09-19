import { _traverseTree } from '../_utils';

function predict(example) {
  const rootNode = this['rootNode'];
  const prediction = _traverseTree(rootNode, example);
  return prediction;
}

module.exports = predict;