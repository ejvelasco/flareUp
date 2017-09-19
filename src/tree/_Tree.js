import { _traverseTree } from './_utils';

class Tree {
  predict(example) {
    const rootNode = this['rootNode'];
    const prediction = _traverseTree(rootNode, example);
    return prediction;
  }
}

export default Tree;