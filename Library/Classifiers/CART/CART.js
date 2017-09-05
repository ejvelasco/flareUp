const gini = require('./gini');
const chooseSplit = require('./chooseSplit');
const calcProbs = require('./calcProbs');
const methodsPath = require('./methodsPath');
const mode = require(methodsPath + 'mode');

function CART(examples = [], depthMax = 10, depth = 0) {
	const labels = examples.map((example) => example['label']);
	const labelsNoDups = [... new Set(labels)];
	if (depth === depthMax) return mode(labels);
	if (gini(examples) === 0) return labelsNoDups[0];
	const attribs = Object.keys(examples[0]).filter(attrib => attrib !== 'label');
	const split = chooseSplit(attribs, examples, labelsNoDups);	
	depth++;
	const tree = {
		split: {
			attrib: split['attrib'],
			val: split['val']
		},
		probs: calcProbs(examples, labelsNoDups),
		left: CART(split['left'], depthMax, depth),
		right: CART(split['right'], depthMax, depth)  
	};
	return tree;
}

module.exports = CART;