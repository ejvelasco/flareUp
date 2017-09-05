const Classifier = require('../Classifier');
const memberNames = [
	'format', 
	'predict', 
	'pretty', 
	'split', 
	'toConditionals', 
	'train'
];
const members = memberNames.map((name) => {
	const member = { 
		name,
		method: require('./' + name) 
	};
	return member;
});

class CARTClassifier extends Classifier {
	constructor() {
		super(members);
		this.tree = null;
	}
}

module.exports = CARTClassifier;
