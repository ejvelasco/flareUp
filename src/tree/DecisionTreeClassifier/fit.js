import { _treeBuilderWrapper } from '../_utils';
import _defaults from './_defaults';

function fit(options) {
  this.rootNode = _treeBuilderWrapper(options, _defaults, 'gini', 'mode');
}

export default fit;
