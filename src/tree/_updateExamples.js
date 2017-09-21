function _updateExamples(options, split, child, depth) {
  options['depth'] = depth + 1; 
  options['examples'] = split[child];
  options['parentLabels'] = split[`${child}Labels`];
  return options;
}

export default _updateExamples;