import _utils from './_utils';

function _decisionTree(options) {
  const defaults = {
    examples: [],
    features: [],
    maxDepth: null, 
    maxFeatures: null,   
    minExamplesRequired: 2,
    minImpurityDecrease: 0,
  };
  options = _utils._setDefaults(options, defaults);
  options = _utils._extraParameters(options, options['examples']);
  const tree = _utils._treeBuilder(options);
  return tree;
}

export default _decisionTree;