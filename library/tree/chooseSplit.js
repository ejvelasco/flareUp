const cost = require('./cost');

function chooseSplit(attribs, examples) {
	const splits = [];
	attribs.forEach((attrib) => {
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