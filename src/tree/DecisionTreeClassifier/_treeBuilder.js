import { gini, mode } from '../../utils/utils';
import { _chooseSplit, _probabilityOfLabels } from '../_utils';
import _utils from './_utils';

function _treeBuilder(options) {
  const depth = options['depth'];
  const votedLabelParent = mode(options['parentLabels']);
  if (depth === options['maxDepth'] || options['examples'] === []) {
    return new _utils._LeafNode(votedLabelParent, depth);
  }
  const labels = options['examples'].map(example => example['label']);
  const votedLabel = mode(labels);
  if ((options['examples'] < options['minExamplesRequired']) || (gini(options['examples']) === 0)) {
    return new _utils._LeafNode(votedLabel, depth);
  }
  const split = _chooseSplit(options);
  const splitImpurityDecrease = _utils._impurityDecrease(options, split);
  if (splitImpurityDecrease < options['minImpurityDecrease']) {
    return new _utils._LeafNode(votedLabel, depth);
  }
  const nodeOptions = {
    depth,
    feature: split['feature'],
    gini: gini(options['examples']),
    labelByProbability: _probabilityOfLabels(options['examples'], labels),
    left: _treeBuilder(_utils._updateParameters(options, split['left'], depth)),
    right: _treeBuilder(_utils._updateParameters(options, split['right'], depth)),
    threshold: split['threshold'],
    type: (depth === 1) ? 'root' : 'child',
  };
  return new _utils._Node(nodeOptions);
}

export default _treeBuilder;