function _extraParameters(options, examples, impurity) {
  options['depth'] = 1;
  options['impurity'] = impurity(examples);
  return options;
}

export default _extraParameters;