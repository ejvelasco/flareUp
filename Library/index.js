/*
	* flareUp - The tiny Machine Learning library hoping to grow up and change the world.
	* @license
	* Copyright Eduardo J. Velasco MAIN_CONTRIBUTOR_URL
	* Released under MIT license LICENSE_URL
*/
const libPath = './lib/';
const classifierPaths = ['./classifiers/ID3/', './classifiers/CART/']; 
const modules = ['range', 'mode', 'rows', 'columns', 'isObject', 'shuffle', 'save'];
const classifiers = ['ID3Classifier', 'CARTClassifier'];
const VERSION = '1.0.0';
const flareUp = {
	classifiers: {}
};

modules.forEach((module) => {
	flareUp[module] = require(libPath+module);
});
classifiers.forEach((classifier, i) => {
	flareUp['classifiers'][classifier] = require(classifierPaths[i]+classifier);
});

module.exports = flareUp;
