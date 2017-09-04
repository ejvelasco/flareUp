const flareUp = require('../../../Library/index');

function learnCART(data) {
	const attribs = flareUp.range(data[0].length);
	const label = attribs[attribs.length - 1];
	const classifier = new flareUp.classifiers.CARTClassifier();
	const examples = classifier.format(data, attribs, label);
	const [train, test] = classifier.split(examples);
	const tree = classifier.train(train);
	classifier.toConditionals(tree, 'conditionalTree.js', 'conditionalTree');
	flareUp.save(test, attribs, 'test.csv');
}

flareUp.load('credit.csv', learnCART);

