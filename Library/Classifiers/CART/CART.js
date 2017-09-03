const rel = '../../Methods/';
const mode = require(rel + 'mode');
const gini = require('./gini');
const chooseSplit = require('./chooseSplit');
const calcProbs = require('./calcProbs');

function CART(examples = [], depth = 0, depthMax = 10) {
	const labels = examples.map((example) => example['label']);
	const labelsNoDups = [...new Set(labels)];
	if (depth === depthMax) return mode(labels);
	if (gini(examples) === 0) return labelsNoDups[0];
	const attribs = Object.keys(examples[0]).filter(attrib => attrib !== 'label');
	const split = chooseSplit(attribs, examples, labelsNoDups);	
	depth++;
	const tree = {
		split: {
			attrib: split['attrib'],
			val: split['val'],
		},
		probs: calcProbs(examples, labelsNoDups),
		left: CART(split['left'], depth, depthMax),
		right: CART(split['right'], depth, depthMax),  
	};
	return tree;
}

module.exports = CART;