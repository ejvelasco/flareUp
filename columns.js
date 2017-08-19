/*
	* Selects columns of a 2D array
	* 
	* @member of flareUp
	* @since 1.0.0
	*
	* @param {Array} 2D Array 
	* @param {number} start of columns to select, inclusive.
	* @param {number} end of columns to select, exclusive.
	*
 	* @returns {Array} columns selected.
	*
	* @example
	* const a = [
	* 	[1, 2, 1],
	* 	[2, 3, 4],
	* 	[3, 5, 3]
	* ];
	*
	* columns(a, 1, 2); // => [2, 3, 5]
*/
const range = require('./range');

function columns(a = [], start = 0, end) {
	if (end === undefined) {
		end = start;
		start = 0;
	}
	const _columns = [];
	range(start, end).forEach(i => {
		_columns.push(a.map((row) => row[i]));
	});
	return _columns.length === 1 ? _columns[0] : _columns;
}

module.exports = columns;