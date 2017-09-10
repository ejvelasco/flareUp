const flareUp = require('../../../Library/index');

function learnCART(data) {
	const attribs = flareUp.range(data[0].length);
	const label = attribs[attribs.length - 1];
	const classifier = new flareUp.classifiers.CARTClassifier();
	const examples = classifier.format(data, attribs, label);
	const [train, test] = classifier.split(examples);
	const sets = [];
	const trees = [];
	flareUp.range(10).forEach(() => {
		const [trainSub, testSub] = classifier.split(train);
		sets.push(trainSub);
	});
	flareUp.range(10).forEach((i) => {
		trees.push(classifier.train(sets[i], 2));
	});
	let numRight = 0;
	test.forEach((example) => {
		const predictions = trees.map(tree => classifier.predict(tree, example));
		const prediction = flareUp.mode(predictions);
		if (prediction == example['label']) {
			numRight++;
		}
	});
	console.log(numRight/test.length);
}

flareUp.load('credit.csv', learnCART);

