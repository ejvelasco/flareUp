'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _extraParameters(options, examples, impurity) {
  options['depth'] = 1;
  options['impurity'] = impurity(examples);
  return options;
}

exports.default = _extraParameters;