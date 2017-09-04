const flareUp = require('../../../Library/index');
const conditionalTree = require('./conditionalTree');

function testCART(data) {
	const attribs = data.shift();
	const label = attribs[attribs.length - 1];
	const classifier = new flareUp.classifiers.CARTClassifier();
	const test = classifier.format(data, attribs, label);
	let numRight = 0;
	test.forEach((example) => {
		if (conditionalTree(example) == example['label'] ) {
			numRight++;
		}
	});
	console.log(numRight / test.length);
}

flareUp.load('test.csv', testCART);