/*
	* Selects the best attribute to be the next node of a decision tree, based on the information gain calculation at https://en.wikipedia.org/wiki/Information_gain_in_decision_trees. 
	* 
	* @member of flareUp
	* @since 1.0.0
	*
	* @param {Array} [attribs] Array of data attributes. 
	* @param {Array} [examples] Array of data examples.
	* @param {Array} [labels] Data labels to be analyzed.
	*
	* @returns {String} Best data attribute to select.
*/
const entropy = require('./entropy');

function splitInfo(set, subset) {
	const S = set.length;
	const T = subset.length;
	return -(S/T)*Math.log2(S/T);

}
function chooseAttrib(attribs, examples, labels) {
	const gainRatios = [];
	const labelsUnique = [...new Set(labels)];
	labels = labels.map((label) => (label === labelsUnique[0]) ? true : false);
	const P = labels.filter(label => label).length;
	const N = labels.filter(label => !label).length; 
	attribs.forEach((attrib, i) => {
		const subsets = {};
		const vals = examples.map((example) => example[attrib]);
		vals.forEach((val, j) => {
			const valSafe = val.toString();
			if (subsets[valSafe]) {
				subsets[valSafe].push(labels[j]);
			} else {
				subsets[valSafe] = [labels[j]];
			}
		});
		let remainder = 0;
		let norm = 0;
		Object.keys(subsets).forEach((subset) => {
			const P_i = subsets[subset].filter(label => label).length;
			const N_i = subsets[subset].filter(label => !label).length;
			remainder += ((P_i+N_i)/(P+N))*entropy(subsets[subset]);
			norm += splitInfo(vals, subsets[subset]);
		});
		const gain = entropy(labels) - remainder;
		const gainRatio = {
			attrib, 
			ratio: (gain/norm).toFixed(3),
		};
		gainRatios.push(gainRatio);
	});
	gainRatios.sort((a, b) => b.ratio - a.ratio);
	return gainRatios[0]['attrib'];
};

module.exports = chooseAttrib;