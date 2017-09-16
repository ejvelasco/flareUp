function _traverseTree(node, example) {
  if (node['type'] === 'leaf') {
    return node['label'];
  }
  const feature = node['feature'];
  const threshold = node['threshold'];
  const result = (example[feature] <= threshold) ? _traverseTree(node['left'], example) : _traverseTree(node['right'], example);    
  return result;
}

export default _traverseTree;