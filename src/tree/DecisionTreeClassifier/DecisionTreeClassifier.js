import { each } from '../../utils/index';
import { DecisionTree, set_defaults, tree_builder } from '../utils';
import defaults from './defaults';
import extend_options from './extend_options';

class DecisionTreeClassifier extends DecisionTree {
  fit(options) {
    const options_set = set_defaults(options, defaults);
    const options_extended = extend_options(options_set);
    const classifier = this;
    classifier.set_up(options_extended);
    classifier['root_node'] = tree_builder(classifier);
    return classifier;
  }
}

export default DecisionTreeClassifier;