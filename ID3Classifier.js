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
const isObject = require('./isObject');
const rows = require('./rows');
const columns = require('./columns');
const mode = require('./mode');
const ID3 = require('./ID3');

class ID3Classifier {
	constructor() {
		this.tree = null;
	}
	fit(attribs, examples, labels) {
		return this.tree = ID3(attribs, attribs, examples, examples, mode(labels)); 
	}
	print() {
		console.log(JSON.stringify(this.tree, null, '  '));
	}
	predict(tree, attribs, example) {
		const label = example[attribs.indexOf(tree.label)]; 
		const val = tree['vals'][label];
		return isObject(val) ? this.predict(val, attribs, example) : val;
	}
}

module.exports = ID3Classifier;

