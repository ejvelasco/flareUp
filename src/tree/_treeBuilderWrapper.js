import {
  _setDefaults,
  _criteria,
  _treeBuilder,
  _voters,
} from './_utils';

function _treeBuilderWrapper(options, defaults) {
  options = _setDefaults(options, defaults);
  const voter = _voters[options['voter']];
  const criterion = _criteria[options['criterion']];
  options['N'] = options['examples'].length;
  options['impurity'] = criterion(options['examples']);
  const tree = _treeBuilder(options, criterion, voter);
  return tree;
}

export default _treeBuilderWrapper;