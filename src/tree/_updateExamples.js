function _updateExamples(options, split, child) {
  options['examples'] = split[child];
  options['parentLabels'] = split[`${child}Labels`];
  return options;
}

export default _updateExamples;