const flareUp = require('../Library/index.js');
flareUp.load('credit.csv', (data) => {
	const examples = flareUp.format(data);
	const options = {
		examples, 
		fractionToTrain: .8,
		stratified: true
	};
	const [train, test] = flareUp.split(options);
	const classifier = new flareUp.classifiers.CARTClassifier();
	const tree = classifier.train(train, 2);
	let numRight = 0;
	test.forEach((example) => {
		if (example['label'] === classifier.predict(tree, example)) {
			numRight++;
		}
	});
	console.log(numRight / test.length);

});