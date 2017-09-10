const gini = require('./gini');
const chooseSplit = require('./chooseSplit');
const calcProbs = require('./calcProbs');
const methodsPath = require('./methodsPath');
const mode = require(methodsPath + 'mode');

function CART(examples = [], def) {
	const labels = examples.map((example) => example['label']);
	const labelsNoDups = [... new Set(labels)];
	if (examples.length === 0) return def;
	if (gini(examples) === 0) return labelsNoDups[0];
	const attribs = Object.keys(examples[0]).filter(attrib => attrib !== 'label');
	let split = chooseSplit(attribs, examples, labelsNoDups);
	const tree = {
		split: {
			attrib: split['attrib'],
			val: split['val']
		},
		probs: calcProbs(examples, labelsNoDups),
		left: CART(split['left'], def),
		right: CART(split['right'], def)  
	};
	if (tree['left'] === undefined || tree['right'] === undefined) {
		console.log(split);
		// console.log(def);
	}
	return tree;
}

module.exports = CART;