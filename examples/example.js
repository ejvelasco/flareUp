const fs = require('fs');
const csv = require('fast-csv');
const flareUp = require('../src/index');

function shuffle(a) {
	let m = a.length, t = m, i = m;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = a[m];
		a[m] = a[i];
		a[i] = t;
	}
	return a;
}
let dataSet = [];
const stream = fs.createReadStream("mushrooms.csv");
const csvStream = csv()
.on("data", (data) => {
	dataSet.push(data);
})
.on("end", () => {
	dataSet = dataSet.filter(row => !row.some(val => val === '?'));
	const i = Math.floor(dataSet.length * .80);
	const attribs = flareUp.range(dataSet[0].length);
	const classifier = new flareUp.classifiers.ID3Classifier();
	const label = attribs[0];
	const dataSetProcessed = shuffle(classifier.processData(attribs, dataSet, label));
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