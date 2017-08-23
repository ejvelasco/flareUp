/*
	* Class definition of a classifier based on the ID3 Algorithm. 
	* 
	* @member of flareUp
	* @since 1.0.0
	*
	* @function - fit
	*
	* Constructs decision tree with ID3 algorithm.
	* 
	* @param {Array} [attribs] Array of data attributes. 
	* @param {Array} [examples] Array of data examples.
	* @param {Array} [labels] Data labels to be analyzed.
	*
	* @returns {Object} Decision tree.
	* 
	* @function - print

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
const rel = '../../lib/';
const isObject = require(rel + 'isObject');
const rows = require(rel +  'rows');
const columns = require(rel + 'columns');
const mode = require(rel + 'mode');
const ID3 = require('./ID3');
const uuidv4 = require('uuid/v4');

class ID3Classifier {
	constructor() {
		this.tree = null;
	}
	fit(examples) {
		const attribs = Object.keys(examples[0]).filter((key) => key !== 'label');
		return this.tree = ID3(attribs, examples, examples); 
	}
	print() {
		console.log(JSON.stringify(this.tree, null, '  '));
	}
	predict(tree, attribs, example) {
		const label = example[tree.label]; 
		const val = tree['vals'][label];
		return isObject(val) ? this.predict(val, attribs, example) : val;
	}
	processData(attribs, examples, label) {
		const examplesProcessed = [];
		examples.forEach((example) => {
			const exampleProcessed = {};
			example.forEach((val, i) => {
				if (attribs[i] === label) {
					exampleProcessed['label'] = val; 
				} else {
					exampleProcessed[attribs[i]] = val;
				}
			});
			examplesProcessed.push(exampleProcessed);
		});
		return examplesProcessed;
	}
}

module.exports = ID3Classifier;

