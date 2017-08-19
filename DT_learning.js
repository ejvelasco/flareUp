const flareUp = require('./flareUp');

const info_gain = (labels) => {
	const p = labels.filter(label => label).length;
	const n = labels.filter(label => !label).length;
	const p_prop = p/(p+n);
	const n_prop = n/(p+n);
	if (p_prop === 0) {
		return n_prop*Math.log2(n_prop);
	}
	if (n_prop === 0) {
		return -p_prop*Math.log2(p_prop);
	}
	return -p_prop*Math.log2(p_prop)-n_prop*Math.log2(n_prop);
};
const majority_val = (examples) => {
	const labels = flareUp.columns(examples.slice(0, examples.length), examples[0].length - 1, examples[0].length);
	return flareUp.mode(labels);	
};
const have_same_class = (examples) => {
	const labels = flareUp.columns(examples.slice(0, examples.length), examples[0].length - 1, examples[0].length);
	return [new Set(labels).size === 1, labels[0]];
};
const choose_attrib = (attribs, examples) => {
	const labels = flareUp.columns(examples.slice(0, examples.length), examples[0].length - 1, examples[0].length);
	const gains = [];
	attribs.forEach((attrib, i) => {
		const subsets = {};
		const vals = flareUp.columns(examples, i, i+1);
		vals.forEach((val, j) => {
			const val_safe = val.toString();
			if (subsets[val_safe]) {
				subsets[val_safe].push(labels[j]);
			} else {
				subsets[val_safe] = [labels[j]];
			}
		});
		let remainder = 0;
		Object.keys(subsets).forEach((subset) => {
			const p = labels.filter(label => label).length;
			const n = labels.filter(label => !label).length;
			const p_i = subsets[subset].filter(label => label).length;
			const n_i = subsets[subset].filter(label => !label).length;
			remainder += ((p_i+n_i)/(p+n))*info_gain(subsets[subset]);
		});
		const gain = {
			gain: (info_gain(labels) - remainder).toFixed(3),
			attrib, 
		};
		gains.push(gain);
	});
	gains.sort((a, b) => b.gain - a.gain);
	return gains[0].attrib;
};
const decision_tree_learning = (attribs, examples, default_val) => {
	if (!examples || !examples.length) return default_val;
	if (!attribs || !attribs.length) return majority_val(examples);
	const same_class = have_same_class(examples); 
	if (same_class[0]) return same_class[1];
	const best = choose_attrib(attribs, examples);
	const tree = {
		label: best,
	};
	const m = majority_val(examples);
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
