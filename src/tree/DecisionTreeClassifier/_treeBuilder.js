import { 
  gini, 
  mode, 
} from '../../utils/utils';
import {
  _Node,
  _chooseSplit,
  _probabilityOfLabels,
} from '../_utils';
import {
  _cost,
  _updateParameters,
  _impurityDecrease,
} from './_utils';

function _treeBuilder(options) {
  const depth = options['depth'];
  const votedLabelParent = mode(options['parentLabels']);
  const leafNodeOptions = {
    depth,
    label: votedLabelParent,
    type: 'leaf',
  };
  if (depth === options['maxDepth'] || options['examples'] === []) {
    return new _Node(leafNodeOptions);
  }
  const labels = options['examples'].map(example => example['label']);
  const votedLabel = mode(labels);
  leafNodeOptions['label'] = votedLabel;
  if ((options['examples'] < options['minExamplesRequired']) || (gini(options['examples']) === 0)) {
    return new _Node(leafNodeOptions);
  }
  const split = _chooseSplit(options);
  const splitImpurityDecrease = _impurityDecrease(options, split);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return new _Node(leafNodeOptions);
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

export default _treeBuilder;