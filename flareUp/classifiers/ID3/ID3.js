/*
	* Decision Tree Machine Learning algorithm based on the algorithm in figure 18.5 (p.702) of Artificial Intelligence: A Modern Approach, 
	* by Stuart J. Russell and Peter Norvig, 3rd ed.
	* 
	* @member of flareUp
	* @since 1.0.0
	*
	* @param {Array} [attribs] Data attributes. 
	* @param {Array} [examples] Data examples.
	* @param {Array} [examplesParent] Data examples from parent node.
	*
	* @returns {Object} Decision Tree object constructed by the algorithm.
*/
const rel = '../../lib/';
const mode  = require(rel + 'mode');
const chooseAttrib = require('./chooseAttrib');

function ID3(attribs, examples, examplesParent) {
	const labels = examples.map((example) => example.label);
	const labelsParent = examplesParent.map((example) => example.label);
	if (!examples.length) return mode(labelsParent);
	if ([...new Set(labels)].length === 1) return labels[0];
	if (!attribs.length) return mode(labels);
	const bestAttrib = chooseAttrib(attribs, examples, labels);
	const tree = {
		label: bestAttrib,
		vals: {}
	};
	const bestAttribUniqueVals = [...new Set(examplesParent.map((example) => example[bestAttrib]))];
	bestAttribUniqueVals.forEach((val) => {
		const exs = examples.filter((example) => example[bestAttrib] === val);
		const subtree = ID3(attribs.filter((attrib) => attrib !== bestAttrib), exs, examples);
		tree['vals'][val.toString()] = subtree;
	});
	return tree;
}

module.exports = ID3;