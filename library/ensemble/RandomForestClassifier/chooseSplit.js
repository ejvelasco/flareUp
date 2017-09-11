const cost = require('./cost');

function chooseSplit(attribs, examples) {
	const splits = [];
	const A = attribs.length;
	const S = Math.floor(Math.sqrt(A));
	const bag = [];
	while (bag.length < S) {
		const i = Math.floor(Math.random() * i);
		bag.push(attribs[i]);
	}
	bag.forEach((attrib) => {
		const vals = examples.map(example => example[attrib]);
		vals.forEach((val) => {
			const left = examples.filter(example => example[attrib] <= val);
			const right = examples.filter(example => example[attrib] > val);
			const split = {
				attrib, 
				val,
				left,
				right,
				cost: cost(attrib, left, right), 
			};
			splits.push(split);
		});
	});
	splits.sort((a, b) => a['cost'] - b['cost']);
	return splits[0];
}

module.exports = chooseSplit;