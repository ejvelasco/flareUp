const fs = require('fs');
const csv = require('fast-csv');
const flareUp = require('../../../flareUp/index');

function onData(data) {
	dataSet.push(data);
}

function onEnd() {
	const examples = dataSet.filter(row => !row.some(val => val === '?'));
	const attribs = ['Sepal Length', 'Sepal Width', 'Petal Length', 'Petal Width', 'Class'];
	const label = attribs[attribs.length - 1];
	const classifier = new flareUp.classifiers.CARTClassifier();
	const examplesProcessed = classifier.processData(attribs, examples, label);
	const [trainSet, testSet] = classifier.split(examplesProcessed);
	const tree = classifier.train(trainSet);
	classifier.train(trainSet, attribs);
	let numRight = 0;
	testSet.forEach((example) => {
		if (classifier.predict(tree, example) == example.label) {
			numRight++;
		}
	});
	console.log(numRight / testSet.length);
}
const dataSet = [];
const stream = fs.createReadStream('iris.csv');
const csvStream = csv().on('data', onData).on('end', onEnd);
stream.pipe(csvStream);