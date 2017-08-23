const fs = require('fs');
const csv = require('fast-csv');
const flareUp = require('../flareUp/index');

function onData(data) {
	dataSet.push(data);
}

function onEnd() {
	// drop rows with missing values
	const examples = dataSet.filter(row => !row.some(val => val === '?'));
	// set index to split data
	const i = Math.floor(examples.length * .80);
	// since attribs are anonymous, assign them numerical names
	const attribs = flareUp.range(examples[0].length);
	// first column is the edible / poisonous label
	const label = attribs[0];
	// process data
	const classifier = new flareUp.classifiers.ID3Classifier();
	const examplesProcessed = flareUp.shuffle(classifier.processData(attribs, dataSet, label));
	const trainSet = examplesProcessed.slice(0, i);
	const testSet = examplesProcessed.slice(i, examplesProcessed.length);
	// construct tree from training set
	const tree = classifier.train(trainSet);
	// quick accuracy test with test set
	let numRight = 0;
	testSet.forEach((example) => {
		const prediction = classifier.predict(tree, attribs, example);
		if (prediction === example.label) {
			numRight++;
		}
	});
	console.log( 'Samples Correctly Predicted: '+ ((numRight / testSet.length) * 100).toFixed(2).toString() + '%');
}
// parse csv data into array
const dataSet = [];
const stream = fs.createReadStream('mushrooms.csv');
const csvStream = csv().on('data', onData).on('end', onEnd);
stream.pipe(csvStream);