/*
	* The tiny Machine Learning library hoping to grow up and change the world.
	* @license
	* Copyright Eduardo J. Velasco MAIN_CONTRIBUTOR_URL
	* Released under MIT license LICENSE_URL
*/
const modules = ['range', 'mode', 'rows', 'columns', 'entropy'];
const classifiers = ['DecisionTree'];
const VERSION = '1.0.0';
const flareUp = {
	classifiers: {}
};
modules.forEach((module) => {
	flareUp[module] = require('./'+module);
});
classifiers.forEach((classifier) => {
	flareUp['classifiers'][classifier] = require('./'+classifier);
});

module.exports = flareUp;
