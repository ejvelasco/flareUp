const fs = require('fs');
const csv = require('fast-csv');
const flareUp = require('../src/index');

let dataSet = [];
const stream = fs.createReadStream("credit.csv");
const csvStream = csv()
.on("data", (data) => {
	dataSet.push(data);
})
.on("end", () => {
	dataSet = dataSet.filter(row => !row.some(val => val === '?'));
	const i = Math.floor(dataSet.length * .80);
	const attribs = flareUp.range(dataSet[0].length);
	const classifier = new flareUp.classifiers.ID3Classifier();
	const label = attribs[attribs.length - 1];
	const dataSetProcessed = classifier.processData(attribs, dataSet, label).map((example) => {
		example.label = (example.label === '+') ? true : false;
		return example;
	});
	const trainSet = dataSetProcessed.slice(0, i);
	const testSet = dataSetProcessed.slice(i, dataSetProcessed.length);
	const tree = classifier.fit(trainSet);
	let right = 0;
	testSet.forEach((example) => {
		const prediction = classifier.predict(tree, attribs, example);
		if (prediction === example.label) {
			right++;
		}
	});
	console.log(right / testSet.length);
});
stream.pipe(csvStream);