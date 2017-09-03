function calcProbs(examples, labels) {
	const probs = {};
	const M = examples.length;
	labels.forEach((label) => {
		const P_i = (examples.filter(example => example['label'] === label).length/M);
		probs[label] = P_i.toFixed(4);
	});
	return probs;
}

module.exports = calcProbs;