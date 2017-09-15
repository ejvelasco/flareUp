import { isObjectLiteral } from '../../utils/utils';

function predict(node, example) {
  if (!isObjectLiteral(node)) {
    return node;
  }
  const feature = node['feature'];
  const threshold = node['threshold'];
  const result = (example[feature] <= threshold) ? predict(node['left'], example) : predict(node['right'], example);    
  return result;
}

module.exports = predict;