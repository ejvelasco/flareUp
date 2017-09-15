import { gini, mode } from '../../utils/utils';
import { _chooseSplit, _probabilityOfLabels } from '../_utils';

function _setDefaults(options, defaults) {
  Object.keys(defaults).forEach((key) => {
    if (typeof options[key] !== 'undefined') {
      defaults[key] = options[key];
    }
  });
  return defaults;
}

function _impurityDecrease(options, split) {
  const N_C_R = split['right'].length;
  const N_C_L = split['left'].length;
  const N_C = N_C_R + N_C_L;
  const impurityRight = gini(split['right']);
  const impurityLeft = gini(split['left']);
  const result = (N_C / options['N']) * (options['impurity'] - N_C_R / N_C * impurityRight - N_C_L / N_C * impurityLeft);
  return result;
}

function _extraParameters(options, examples) {  
  options['type'] = 'root';
  options['N'] = examples.length;
  options['depth'] = 1;
  options['impurity'] = gini(examples);
  return options;
}

function _updateParameters(options, examples, depth, nodeType) {
  options['depth'] = depth + 1;
  options['examples'] = examples;
  options['parentLabels'] = examples.map(example => example['label']);
  return options;
}

function _buildTree(options) {
  const defaults = {
    examples: [],
    features: [],
    maxDepth: null, 
    maxFeatures: null,   
    minExamplesRequired: 2,
    minImpurityDecrease: 0.01,
  };
  options = _setDefaults(options, defaults);
  options = _extraParameters(options, options['examples']);
  const tree = _build(options);
  return tree;
}

class LeafNode {
  constructor(label) {
    this.type = 'leaf';
    this.label = label;
  }
}

function _build(options) {
  if (options['examples'] === []) {
    const votedParentLabel = mode(options['parentLabels']);
    return new LeafNode(votedParentLabel);
  }
  const labels = options['examples'].map(example => example['label']);
  const votedLabel = mode(labels);
  if ((options['examples'] < options['minExamplesRequired']) || (gini(options['examples']) === 0)) {
    return new LeafNode(votedLabel);
  }
  const split = _chooseSplit(options);
  const splitImpurityDecrease = _impurityDecrease(options, split);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return new LeafNode(majorityVotedLabel);
  }
  const depth  = options['depth'];
  const node = {
    depth,
    feature: split['feature'],
    threshold: split['threshold'],
    gini: gini(options['examples']),
    labelByProbability: _probabilityOfLabels(options['examples'], labels),
    left: _build(_updateParameters(options, split['left'], depth)),
    right: _build(_updateParameters(options, split['right'], depth)),
  };
  return node;
}

export default _buildTree;