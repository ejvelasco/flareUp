const Classifier = require('../Classifier');
const CART = require('./CART');
const rel = '../../lib/';
const shuffle = require(rel + 'shuffle');

const methods = {
	predict() {
		console.log('hey');
	},
	printTree() {
		if (this.tree) {
			console.log(JSON.stringify(this.tree, null, '  '));
		} else {
			console.log('Tree not trained');
		}
	},
	processData(attribs, examples, label) {
		const examplesProcessed = examples.map((example) => {
			const exampleProcessed = {};
			example.forEach((val, i) => {
				if (attribs[i] === label) {
					exampleProcessed['label'] = val; 
				} else {
					exampleProcessed[attribs[i]] = Number(val);
				}
			});
			return exampleProcessed;
		});
		return examplesProcessed; 
	},
	train(examples) {
		this.tree = CART(examples);
	}
};

class CARTClassifier extends Classifier {
	constructor() {
		super(methods);
		this.tree = null;
	}
}

module.exports = CARTClassifier;
