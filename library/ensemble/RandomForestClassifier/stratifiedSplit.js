function stratifiedSplit(examples = [], fractionToTrain = .8) {
	const numberOfExamples = examples.length;
	const labels = examples.map(example => example['label']);
	const labelsNoDuplicates = [... new Set(labels)];
	const groupedByLabel = [];
	labelsNoDuplicates.forEach((label) => {
		const group = examples.filter(example => example['label'] === label);
		groupedByLabel.push(group);
	});
	const labelRatios = groupedByLabel.map(group => group.length / numberOfExamples);
	const trainingExamples = [];
	labelRatios.forEach((ratio, i) => {
		let representativeSize = Math.floor(ratio * fractionToTrain * numberOfExamples);
		const group = groupedByLabel[i];
		while (representativeSize > 0) {
			const randomIndex = Math.floor(Math.random() * group.length);
			trainingExamples.push(group[randomIndex]);
			group.splice(randomIndex, 1);
			representativeSize--;
		}
		trainingExamples.push(group);
		groupedByLabel[i] = group;
	});
	console.log(groupedByLabel);
	console.log(trainingExamples);
}

module.exports = stratifiedSplit;