const rows = require('./rows');
const columns = require('./columns');
const mode = require('./mode');
const decisionTreeLearning = require('./decisionTreeLearning');

class DecisionTree {
	constructor() {
		this.tree = null;
	}
	fit(attribs, examples, labels) {
		this.tree = decisionTreeLearning(attribs, attribs, examples, examples, mode(labels)); 
		return this.tree;
	}
	print() {
		console.log(JSON.stringify(this.tree, null, '  '));
	}
	predict(data) {
		//traverse this.tree & predict result
	}
}

module.exports = DecisionTree;

