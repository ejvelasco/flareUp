import { each } from '../../utils/index';
import { DecisionTree, tree_builder, set_defaults } from '../utils';
import defaults from './defaults';
import extra_parameters from './extra_parameters';

class DecisionTreeClassifier extends DecisionTree {
  fit(options) {
    const classifier = this;
    options = set_defaults(options, defaults);
    options = extra_parameters(options);
    each(options, (options, key) => {
      classifier[key] = options[key];
    });
    classifier['root_node'] = tree_builder(classifier);
    return classifier;
  }
}

export default DecisionTreeClassifier;