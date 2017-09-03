const Classifier = require('../Classifier');
const CART = require('./CART');
const rel = '../../Methods/';
const shuffle = require(rel + 'shuffle');
const isObject = require(rel + 'isObject');
const fs = require('fs');
const toConditionals = require('./toConditionals');
const columns = require(rel + 'columns');

function catToInt(column) {
	const categories = {};
	let counter = 1;
	return column.map(val => !categories[val] ? categories[val] = counter++ : categories[val]);
}

const methods = {
	predict(node, example) {
		if (!isObject(node)) {
			return node;
		}
		const attrib = node['split']['attrib'];
		const val = node['split']['val'];
		return (example[attrib] <= val) ? this.predict(node['left'], example) : this.predict(node['right'], example);		
	},
	printTree() {
		if (this.tree) {
			console.log(JSON.stringify(this.tree, null, '  '));
		} else {
			console.log('Tree not trained');
		}
	},
	processData(attribs, examples, label) {
		let examplesProcessed = [];
		examples[0].forEach((item, i) => {
			const column = columns(examples, i, i + 1);
			const isCat = column.some(val => Number(val) != val);
			examplesProcessed.push(isCat ? catToInt(column) : column.map(val => Number(val)));
		});
		examplesProcessed = examplesProcessed[0].map((col, i) => examplesProcessed.map(row => row[i]));
		examplesProcessed = examplesProcessed.map((example) => {
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
	train(examples) {
		return this.tree = CART(examples);
	},
	toConditionals,
	split(examples = [], fraction = .8) {
		const i = Math.floor(examples.length * fraction);
		return [examples.slice(0, i), examples.slice(i, examples.length)];
	}
};

class CARTClassifier extends Classifier {
	constructor() {
		super(methods);
		this.tree = null;
	}
}

module.exports = CARTClassifier;
