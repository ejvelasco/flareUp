const rel = '../../lib/';
const mode = require(rel + 'mode');

function cost(attrib, left, right) {
	const M_L = left.length;
	const M_R = right.length;
	const M = M_L + M_R;
	const G_L = gini(left, M);
	const G_R = gini(right, M);
	return (M_L/M)*G_L + (M_R/M)*G_R; 
}

function gini(a) {
	const labels = a.map((example) => example.label);
	const labelsNoDups = [... new Set(labels)];
	let sum = 0;
	labelsNoDups.forEach((label) =>{
		const P_i = (a.filter((el) => el.label === label).length)/a.length;
		sum += (P_i ** 2);
	});
	return (1 - sum);
}

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
	splits.sort((a, b) => a.cost - b.cost);
	return splits[0];
}

function calcProbs(examples, labels) {
	const probs = {};
	const M = examples.length;
	labels.forEach((label) => {
		const P_i = (examples.filter(example => example['label'] === label).length/M);
		probs[label] = P_i.toFixed(4);
	});
	return probs;
}

function CART(examples, depth = 0, MAX_DEPTH = 10) {
	const labels = examples.map((example) => example.label);
	const labelsNoDups = [...new Set(labels)];
	if (depth === MAX_DEPTH) return mode(labels);
	if (gini(examples) === 0) return labelsNoDups[0];
	const attribs = Object.keys(examples[0]).filter(attrib => attrib !== 'label');
	const split = chooseSplit(attribs, examples, labelsNoDups);	
	depth++;
	const tree = {
		split: split.attrib + ' <= ' + split.val,
		probs: calcProbs(examples, labelsNoDups),
		left: CART(split.left, depth, MAX_DEPTH),
		right: CART(split.right, depth, MAX_DEPTH),  
	};
	return tree;
}

module.exports = CART;