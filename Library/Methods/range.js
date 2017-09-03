/*
	* Emulates Python's range() function.
	*
	* @memberOf flareUp
	* @since 1.0.0
	*
	* @param {number} [start] Start of range, inclusive.
	* @param {number} [end] End of range, exclusive.
	* @param {number} [step] Value to increment/decrement range.
	*
	* @returns {Array} Numbers [start, end), incrementing/decrementing by step.
	* 
	* @example 
	* range(4); // => [0, 1, 2, 3]
*/ 
function range(start, end, step) {
	if (typeof end == 'undefined') {
		end = start;
		start = 0;
	}
	if (typeof step !== 'number') step = 1;
	if ((step > 0 && start >= end) || (step < 0 && start <= end)) return [];
	const result = [];
	step = Math.floor(step);
	for (let i = start; step > 0 ? i < end : i > end; i += step) {
		result.push(i);
	}
	return result;
}

module.exports = range;