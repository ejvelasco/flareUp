function traverse_tree(node, example) {
  if (node['type'] === 'leaf') {
    return node['label'];
  }
  const feature_index = node['feature_index'];
  const threshold = node['threshold'];
  const result = (example[feature_index] <= threshold) ? traverse_tree(node['left'], example) : traverse_tree(node['right'], example);    
  return result;
}

export default traverse_tree;