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
	*
	* @example
	* const data = [
		* ['Alt', 'Bar', 'Fri', 'Hun', 'Pat', 'Price', 'Rain', 'Res', 'Type', 'Est', 'WillWait'],
		* [true, false, false, true, 'Some', 3, false, true, 'French', '0-10', true],
		* [true, false, false, true, 'Full', 1, false, false, 'Thai', '30-60', false],
		* [false, true, false, false, 'Some', 1, false, false, 'Burger', '0-10', true],
		* [true, false, true, true, 'Full', 1, true, false, 'Thai', '10-30', true],
		* [true, false, true, false, 'Full', 3, false, true, 'French', '>60', false],
		* [false, true, false, true, 'Some', 2, true, true, 'Italian', '0-10', true],
		* [false, true, false, false, 'None', 1, true, false, 'Burger', '0-10', false],
		* [false, false, false, true, 'Some', 2, true, true, 'Thai', '0-10', true],
		* [false, true, true, false, 'Full', 1, true, false, 'Burger', '>60', false],
		* [true, true, true, true, 'Full', 3, false, true, 'Italian', '10-30', false],
		* [false, false, false, false, 'None', 1, false, false, 'Thai', '0-10', false],
		* [true, true, true, true, 'Full', 1, false, false, 'Burger', '30-60', true]
	* ];
	*
	* chooseAttrib(a, 1, 2); // => [2, 3, 4]
*/
const columns = require('./columns');
const entropy = require('./entropy');

function chooseAttrib(attribs, examples, labels) {
	const gains = [];
	const P = labels.filter(label => label).length;
	const N = labels.filter(label => !label).length; 
	attribs.forEach((attrib, i) => {
		const subsets = {};
		const vals = columns(examples, i, i+1);
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
			remainder += ((P_i+N_i)/(P+N))*entropy(subsets[subset]);
		});
		const gain = {
			attrib, 
			gain: (entropy(labels) - remainder).toFixed(3),
		};
		gains.push(gain);
	});
	gains.sort((a, b) => b.gain - a.gain);
	return gains[0]['attrib'];
};

module.exports = chooseAttrib;