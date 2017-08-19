/*
	* The tiny Machine Learning library hoping to grow up and change the world.
	* @license
	* Copyright Eduardo J. Velasco MAIN_CONTRIBUTOR_URL
	* Released under MIT license LICENSE_URL
*/
const modules = ['range', 'mode', 'rows', 'columns', 'entropy'];
const models = ['DecisionTreeClassifier']
const VERSION = '1.0.0';
const flareUp = {};

modules.forEach((module) => {
	flareUp[module] = require('./'+module);
});

module.exports = flareUp;
