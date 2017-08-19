const flareUp = require('./flareUp');

const decision_tree_learning = (attribs, examples, default_val) => {
	if (!examples || !examples.length) return default_val;
	const labels = flareUp.columns(examples.slice(0, examples.length), examples[0].length - 1, examples[0].length);
	if (!attribs || !attribs.length) return flareUp.mode(labels);
	if (new Set(labels).size === 1) return labels[0];
	const best = chooseAttrib(attribs, examples, labels);
	const tree = {
		label: best,
	};
	const m = flareUp.mode(labels);
	const i = attribs_o.indexOf(best);
	const best_vals = flareUp.columns(examples_o, i, i+1);
	const best_vals_unique = new Set(best_vals);
	best_vals_unique.forEach((val) => {
		const examples_i = examples.filter((row) => row[i] === val);
		const subtree = decision_tree_learning(attribs.filter(attrib => attrib !== best['attrib']), examples_i, m);
		tree[val.toString()] = subtree;
	});
	return tree;
};
const data = [
	['Alt', 'Bar', 'Fri', 'Hun', 'Pat', 'Price', 'Rain', 'Res', 'Type', 'Est', 'WillWait'],
	[true, false, false, true, 'Some', 3, false, true, 'French', '0-10', true],
	[true, false, false, true, 'Full', 1, false, false, 'Thai', '30-60', false],
	[false, true, false, false, 'Some', 1, false, false, 'Burger', '0-10', true],
	[true, false, true, true, 'Full', 1, true, false, 'Thai', '10-30', true],
	[true, false, true, false, 'Full', 3, false, true, 'French', '>60', false],
	[false, true, false, true, 'Some', 2, true, true, 'Italian', '0-10', true],
	[false, true, false, false, 'None', 1, true, false, 'Burger', '0-10', false],
	[false, false, false, true, 'Some', 2, true, true, 'Thai', '0-10', true],
	[false, true, true, false, 'Full', 1, true, false, 'Burger', '>60', false],
	[true, true, true, true, 'Full', 3, false, true, 'Italian', '10-30', false],
	[false, false, false, false, 'None', 1, false, false, 'Thai', '0-10', false],
	[true, true, true, true, 'Full', 1, false, false, 'Burger', '30-60', true]
];
const examples_o = flareUp.rows(data, 1, data.length);
const attribs_o = flareUp.rows(data, 0, 1);
attribs_o.pop();
console.log(JSON.stringify(decision_tree_learning(attribs_o, examples_o, true), null, '  '));
