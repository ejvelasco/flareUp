function _updateParameters(options, examples, depth) {
  options['depth'] = depth + 1;
  options['examples'] = examples;
  options['parentLabels'] = examples.map(example => example['label']);
  return options;
}

export default _updateParameters;