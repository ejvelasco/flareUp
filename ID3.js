/*
	* Decision Tree Machine Learning algorithm based on the algorithm in figure 18.5 (p.702) of Artificial Intelligence: A Modern Approach, 
	* by Stuart J. Russell and Peter Norvig, 3rd ed.
	* 
	* @member of flareUp
	* @since 1.0.0
	*
	* @param {Array} [attribs] Data attributes. 
	* @param {Array} [attribsNew] Subset of attributes (equal to [attribs] at first, but later corresponds to [attributes] - best)
	* @param {Array} [examples] Data examples.
	* @param {Array} [examplesNew] Subset of examples (equal to [examples] at first, but later corresponds to [examples_i])
	* @param [defaultVal] Default value to be returned in case examples array is empty.
	*
	* @returns {Object} Decision Tree object constructed by the algorithm.
*/
const columns = require('./columns');
const mode  = require('./mode');
const chooseAttrib = require('./chooseAttrib');

function ID3(attribs, attribsNew, examples, examplesNew, defaultVal) {
	const N = examplesNew.length;
	const M = examples[0].length;
	if (!examplesNew || !N) return defaultVal;
	const labels = columns(examplesNew.slice(0, N), M - 1, M);
	if (!attribsNew || !attribsNew.length) return mode(labels);
	if (new Set(labels).size === 1) return labels[0];
	const best = chooseAttrib(attribsNew, examplesNew, labels);
	const tree = {
		label: best,
		vals: {}
	};
	const m = mode(labels);
	const i = attribs.indexOf(best);
	const bestVals = columns(examples, i, i+1);
	new Set(bestVals).forEach((val) => {
		const examples_i = examplesNew.filter((row) => row[i] === val);
		const subtree = ID3(attribs, attribsNew.filter(attrib => attrib !== best['attrib']), examples, examples_i, m);
		tree['vals'][val.toString()] = subtree;
	});
	return tree;
}

module.exports = ID3;
