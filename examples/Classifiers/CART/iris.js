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
	classifier.train(examplesProcessed, attribs);
	classifier.printTree();
}
const dataSet = [];
const stream = fs.createReadStream('iris.csv');
const csvStream = csv().on('data', onData).on('end', onEnd);
stream.pipe(csvStream);