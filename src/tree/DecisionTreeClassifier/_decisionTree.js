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

function _decisionTree(options) {
  const defaults = {
    examples: [],
    features: [],
    maxDepth: null, 
    maxFeatures: null,   
    minExamplesRequired: 2,
    minImpurityDecrease: 0,
  };
  options = _setDefaults(options, defaults);
  options = _extraParameters(options, options['examples']);
  const tree = _treeBuilder(options);
  return tree;
}

class _LeafNode {
  constructor(label, depth) {
    this.type = 'leaf';
    this.label = label;
    this.depth = depth;
  }
}

class _Node {
  constructor(options) {
    Object.keys(options).forEach((key) => {
      this[key] = options[key];
    });
  }
}

function _treeBuilder(options) {
  const depth = options['depth'];
  const votedLabelParent = mode(options['parentLabels']);
  if (depth === options['maxDepth'] || options['examples'] === []) {
    return new _LeafNode(votedLabelParent, depth);
  }
  const labels = options['examples'].map(example => example['label']);
  const votedLabel = mode(labels);
  if ((options['examples'] < options['minExamplesRequired']) || (gini(options['examples']) === 0)) {
    return new _LeafNode(votedLabel, depth);
  }
  const split = _chooseSplit(options);
  const splitImpurityDecrease = _impurityDecrease(options, split);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return new _LeafNode(votedLabel, depth);
  }
  const nodeOptions = {
    depth,
    feature: split['feature'],
    gini: gini(options['examples']),
    labelByProbability: _probabilityOfLabels(options['examples'], labels),
    left: _treeBuilder(_updateParameters(options, split['left'], depth)),
    right: _treeBuilder(_updateParameters(options, split['right'], depth)),
    threshold: split['threshold'],
    type: (depth === 1) ? 'root' : 'child',
  };
  return new _Node(nodeOptions);
}

export default _decisionTree;