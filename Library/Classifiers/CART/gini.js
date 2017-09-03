function gini(examples) {
	const labels = examples.map((example) => example['label']);
	const labelsNoDups = [... new Set(labels)];
	let sum = 0;
	labelsNoDups.forEach((label) =>{
		const P_i = (examples.filter((example) => example['label'] === label).length)/examples.length;
		sum += (P_i ** 2);
	});
	return (1 - sum);
}

module.exports = gini;