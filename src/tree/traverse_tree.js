function _traverse_tree(node, example) {
  if (node['type'] === 'leaf') {
    return node['label'];
  }
  const feature_index = node['feature_index'];
  const threshold = node['threshold'];
  const result = (example[feature_index] <= threshold) ? _traverse_tree(node['left'], example) : _traverse_tree(node['right'], example);    
  return result;
}

export default _traverse_tree;