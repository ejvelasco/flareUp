import {
  _setDefaults,
  _criteria,
  _extraParameters,
  _impurities,
  _treeBuilder,
  _voters,
} from './_utils';

function _treeBuilderWrapper(options, defaults, impurity, voter) {
  options = _setDefaults(options, defaults);
  impurity = _impurities[impurity];
  voter = _voters[voter];
  const criterion = _criteria[options['criterion']];
  options = _extraParameters(options, options['examples'], impurity);
  const tree = _treeBuilder(options, criterion, impurity, voter);
  return tree;
}

export default _treeBuilderWrapper;