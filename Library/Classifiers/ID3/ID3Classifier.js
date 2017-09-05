/*
	* Class definition of a classifier based on the ID3 Algorithm. 
	* 
	* @member of flareUp
	* @since 1.0.0
	*
	* @function - train
	*
	* Constructs decision tree with ID3 algorithm.
	* 
	* @param {Array} [examples] Array of data examples.
	*
	* @returns {Object} Decision tree.
	* 
	* @function - printTree

	* Prints a pretty version of this.tree.
	*
	* @function - predict
	* 
	* Classifies a given example by walking the decision tree recursively.
	*
	* @param {Object} [tree] Decision tree constructed by fit.
	* @param {Array} [attribs] Array of data attributes.
	* @param {Array} [example] Example to be classified.
	* 
	* @returns {Boolean} Predicted class for example. 
	* 
*/
const Classifier = require('../Classifier');
const ID3 = require('./ID3');
const methodsPath = require('./methodsPath');
const isObject = require(methodsPath + 'isObject');
const shuffle = require(methodsPath + 'shuffle');

const members = {
	constructor() {
		this.tree = null;
	},
	accuracy(tree, attribs, examples) {
		let numRight = 0;
		examples.forEach((example) => {
			const prediction = this.predict(tree, attribs, example);
			if (prediction === example.label) {
				numRight++;
			}
		});
		return ((numRight / examples.length) * 100).toFixed(2).toString() + '%';
	},
	predict(tree, attribs, example) {
		const label = example[tree.label]; 
		const val = tree['vals'][label];
		return isObject(val) ? this.predict(val, attribs, example) : val;
	},
	pretty() {
		if (this.tree === null) {
			const msg = 'Classifier is not trained. Please review the CARTClassifier documentation.';
			throw(new Error(msg));
		}
		const prettyTree = JSON.stringify(this.tree, null, '  '); 
		return prettyTree;
	},
	processData(attribs, examples, label) {
		const examplesProcessed = examples.map((example) => {
			const exampleProcessed = {};
			example.forEach((val, i) => {
				if (attribs[i] === label) {
					exampleProcessed['label'] = val; 
				} else {
					exampleProcessed[attribs[i]] = val;
				}
			});
			return exampleProcessed;
		});
		return shuffle(examplesProcessed); 
	},
	train(examples = []) {
		const attribs = Object.keys(examples[0]).filter((key) => key !== 'label');
		return this.tree = ID3(attribs, examples, examples); 
	},
	split(examples = [], fraction = .8) {
		const i = Math.floor(examples.length * fraction);
		return [examples.slice(0, i), examples.slice(i, examples.length)];
	}
};

class ID3Classifier extends Classifier {
	constructor() {
		super(members);
		this.tree = null;
	}
}

module.exports = ID3Classifier;

