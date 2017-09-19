'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaults = {
  criterion: 'gini',
  examples: [],
  depth: 1,
  features: [],
  maxDepth: null,
  maxFeatures: null,
  minExamplesRequired: 2,
  minImpurityDecrease: 0,
  voter: 'mode'
};

exports.default = _defaults;