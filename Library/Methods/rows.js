/*
	* Selects rows of a 2D array
	* 
	* @member of flareUp
	* @since 1.0.0
	*
	* @param {Array} [a] 2D Array 
	* @param {number} [start] start of rows to select, inclusive.
	* @param {number} [end] end of rows to select, exclusive.
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
const range = require('./range');

function rows(a = [], start = 0, end) {  
	if (end === undefined) {
		end = start;
		start = 0;
	}
	const _rows = [];
	range(start, end).forEach(i => {
		_rows.push(a.filter((row, j) => j === i)[0]);
	});
	return _rows.length === 1 ? _rows[0] : _rows;
}

module.exports = rows;
