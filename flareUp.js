/*
	* The tiny Machine Learning library hoping to grow up and change the world one day.
	* @license
	* Copyright Eduardo J. Velasco MAIN_CONTRIBUTOR_URL
	* Released under MIT license LICENSE_URL
*/
const range = require('./range');
const mode = require('./mode');
const rows = require('./rows');
const columns = require('./columns');

const VERSION = '1.0.0';
const flareUp = {
	range,
	rows,
	mode,
	columns
};

module.exports = flareUp;
