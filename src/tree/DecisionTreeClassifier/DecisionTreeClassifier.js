import { _Tree, _treeBuilderWrapper } from '../_utils';
import _defaults from './_defaults';

class DecisionTreeClassifier extends _Tree {
  fit(options) {
    this.rootNode = _treeBuilderWrapper(options, _defaults, 'gini', 'mode');
  }
}

export default DecisionTreeClassifier;