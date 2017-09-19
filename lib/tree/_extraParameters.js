'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _extraParameters(options, criterion) {
  options['depth'] = 1;
  options['criterion'] = criterion(options['examples']);
  return options;
}

exports.default = _extraParameters;