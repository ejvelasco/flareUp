const fs = require('fs');
const csv = require('fast-csv');
const flareUp = require('../../../flareUp/index');

function onData(data) {
	dataSet.push(data);
}

function onEnd() {
	const examples = dataSet.filter(row => !row.some(val => val === '?'));
	const attribs = flareUp.range(examples[0].length);
	const label = attribs[attribs.length - 1];
	const classifier = new flareUp.classifiers.CARTClassifier();
	const examplesProcessed = classifier.processData(attribs, examples, label);
	const [trainSet, testSet] = classifier.split(examplesProcessed);
	flareUp.save();
}
const dataSet = [];
const stream = fs.createReadStream('credit.csv');
const csvStream = csv().on('data', onData).on('end', onEnd);
stream.pipe(csvStream);