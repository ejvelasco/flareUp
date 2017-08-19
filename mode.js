/*
	* Finds mode of array.
 	*
 	* @memberOf flareUp
 	* @since 1.0.0
 	*
 	* @param {Array} [a] Array to be analyzed.
 	*
 	* @returns element representing mode of array.
 	*
 	* @example 
 	* mode([true, false, true, true]); // => true
*/ 
function mode(a) {
	if (!a.length) return null;
	const seen = {};
	let indexMode = 1;
	let countMode = 1;
	a.forEach((el, i) => {
		const elSafe = el.toString();
		if (seen[elSafe]) {
			seen[elSafe]++;
			if (seen[elSafe] > countMode) {
				indexMode = i;
				countMode = seen[elSafe];
			}
		} else {
			seen[elSafe] = 1;
		}
	});
	return a[indexMode];
}

module.exports = mode;