import { _decisionTree } from './_utils';

function fit(options) {
  this.rootNode = _decisionTree(options);
}

export default fit;
