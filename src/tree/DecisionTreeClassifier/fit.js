import _decisionTree from './_decisionTree';

function fit(options) {
  this.rootNode = _decisionTree(options);
}

export default fit;
