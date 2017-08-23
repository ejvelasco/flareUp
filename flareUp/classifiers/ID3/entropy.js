/*
	* Calculates entropy of an array of boolean values, based on the definition of H(X) found at https://en.wikipedia.org/wiki/Entropy_(information_theory).
	* 
	* @member of flareUp
	* @since 1.0.0
	*
	* @param {Array} [a] Array to be analyzed.
	*
 	* @returns {number} entropy of array.
	*
	* @example
	* const a = [true, false];
	*
	* entropy(a); // => 1
*/
function entropy(a) {
	const P = a.filter(el => el).length;
	const N = a.filter(el => !el).length;
	const P_PROP = P/(P+N);
	const N_PROP = N/(P+N);
	if (P_PROP === 0) {
		return N_PROP*Math.log2(N_PROP);
	}
	if (N_PROP === 0) {
		return -P_PROP*Math.log2(P_PROP);
	}
	return -P_PROP*Math.log2(P_PROP)-N_PROP*Math.log2(N_PROP);
}

module.exports = entropy;