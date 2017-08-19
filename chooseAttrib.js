/*
	* Selects the best attribute to be the next node of a decision tree, based on the information gain calculation at https://en.wikipedia.org/wiki/Information_gain_in_decision_trees. 
	* 
	* @member of flareUp
	* @since 1.0.0
	*
	* @param {Array} 2D Array 
	* @param {number} start of rows to select, inclusive.
	* @param {number} end of rows to select, exclusive.
	*
	* @returns {Array} rows selected.
	*
	* @example
	* const a = [
	* 	[1, 2, 1],
	* 	[2, 3, 4],
	* 	[3, 4, 3]
	* ];
	*
	* rows(a, 1, 2); // => [2, 3, 4]
*/
function chooseAttrib(attribs, examples, labels) {
	const gains = [];
	const P = labels.filter(label => label).length;
	const N = labels.filter(label => !label).length; 
	attribs.forEach((attrib, i) => {
		const subsets = {};
		const vals = flareUp.columns(examples, i, i+1);
		vals.forEach((val, j) => {
			const valSafe = val.toString();
			if (subsets[valSafe]) {
				subsets[valSafe].push(labels[j]);
			} else {
				subsets[valSafe] = [labels[j]];
			}
		});
		let remainder = 0;
		Object.keys(subsets).forEach((subset) => {
			const P_i = subsets[subset].filter(label => label).length;
			const N_i = subsets[subset].filter(label => !label).length;
			remainder += ((P_i+N_i)/(P+N))*flareUp.entropy(subsets[subset]);
		});
		const gain = {
			attrib, 
			gain: (flareUp.entropy(labels) - remainder).toFixed(3),
		};
		gains.push(gain);
	});
	gains.sort((a, b) => b.gain - a.gain);
	return gains[0]['attrib'];
};