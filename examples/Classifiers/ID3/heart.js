/* 
* Predicts whether SPECT heart data is normal or abnormal.
*/
const fs = require('fs');
const csv = require('fast-csv');
const flareUp = require('../../../flareUp/index');

function onData(data) {
	dataSet.push(data);
}

function onEnd() {
	// drop rows with missing values
	const examples = dataSet.filter(row => !row.some(val => val === '?'));
	// since attribs are anonymous, assign them numerical names
	const attribs = flareUp.range(examples[0].length);
	// first column is the normal / abnormal label
	const label = attribs[0];
	// process data
	const classifier = new flareUp.classifiers.ID3Classifier();
	const examplesProcessed = classifier.processData(attribs, dataSet, label);
	const [trainSet, testSet] = classifier.split(examplesProcessed);
	// construct tree from training set
	const tree = classifier.train(trainSet);
	// quick accuracy test with test set
	const accuracy = classifier.accuracy(tree, attribs, testSet);
	console.log( 'Percentage of Samples Correctly Predicted: ' + accuracy);
}
// // parse csv data into array
const dataSet = [];
const stream = fs.createReadStream('heart.csv');
const csvStream = csv().on('data', onData).on('end', onEnd);
stream.pipe(csvStream);