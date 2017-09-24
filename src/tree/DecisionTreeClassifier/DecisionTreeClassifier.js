import { _BaseTree, _tree_builder, _set_defaults } from '../_utils';
import _defaults from './_defaults';
import _extra_parameters from './_extra_parameters';
import { for_each } from '../../utils/index';

class DecisionTreeClassifier extends _BaseTree {
  fit(options) {
    options = _set_defaults(options, _defaults);
    options = _extra_parameters(options);
    for_each(options, (options, key) => {
      this[key] = options[key];
    });
    this['root_node'] = _tree_builder.call(this);
    return this['root_node'];
  }
}

export default DecisionTreeClassifier;