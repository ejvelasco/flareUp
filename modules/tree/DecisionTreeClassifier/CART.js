const gini = require('./gini');
const chooseSplit = require('./chooseSplit');
const methodsPath = require('./methodsPath');
const mode = require(methodsPath + 'mode');
import _probabilityOfLabels from '../probabilityOfLabels';

function CART(examples = [], def) {
  const labels = examples.map((example) => example['label']);
  const labelsNoDups = [... new Set(labels)];
  if (examples.length === 0) {
    return def;
  }
  if (gini(examples) === 0) {
    return labelsNoDups[0];
  }
  const attribs = Object.keys(examples[0]).filter(attrib => attrib !== 'label');
  let split = chooseSplit(attribs, examples, labelsNoDups);
  const tree = {
    split: {
      attrib: split['attrib'],
      val: split['val'],
    },
    probs: _probabilityOfLabels(examples, labelsNoDups),
    left: CART(split['left'], def),
    right: CART(split['right'], def),
  };
  return tree;
}

module.exports = CART;