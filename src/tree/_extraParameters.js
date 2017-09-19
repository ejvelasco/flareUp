function _extraParameters(options, criterion) {
  options['depth'] = 1;
  options['criterion'] = criterion(options['examples']);
  return options;
}

export default _extraParameters;