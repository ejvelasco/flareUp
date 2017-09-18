import { _treeBuilderWrapper } from '../_utils';
import { _defaults } from './_utils';

function fit(options) {
  this.rootNode = _treeBuilderWrapper(options, _defaults, 'gini', 'mode');
}

export default fit;
