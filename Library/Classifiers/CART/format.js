const methodsPath = require('./methodsPath');
const shuffle = require(methodsPath + 'shuffle');
const columns = require(methodsPath + 'columns');

function catToInt(column) {
	const categories = {};
	let counter = 1;
	return column.map(val => !categories[val] ? categories[val] = counter++ : categories[val]);
}

function toNumber(a) {
	return a.map(el => Number(el));
}

function isCat(a) {
	return a.some(el => Number(el) != el);
}

function transpose(a) {
	return a[0].map((col, i) => a.map(row => row[i]));
}

function toExample(row, attribs, label) {
	const example = {};
	row.forEach((val, i) => {
		if (attribs[i] === label) {
			example['label'] = val; 
		} else {
			example[attribs[i]] = val;
		}
	});
	return example;
}

function format(data, attribs, label) {
	const formatted = [];
	data[0].forEach((datum, i) => {
		const column = columns(data, i, i + 1);
		const columnFormatted = isCat(column) ? catToInt(column) : toNumber(column); 
		formatted.push(columnFormatted);
	});
	const examples = transpose(formatted).map((row) => toExample(row, attribs, label));
	return shuffle(examples);
}

module.exports = format;