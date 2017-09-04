const columns = require('./columns');

function format(attribs, label, data) {
	let formatted = [];
	data[0].forEach((datum, i) => {
		const column = columns(data, i, i + 1);
		const isCat = column.some(val => Number(val) != val);
		formatted.push(isCat ? catToInt(column) : column.map(val => Number(val)));
	});
	examplesProcessed = examplesProcessed[0].map((col, i) => examplesProcessed.map(row => row[i]));
	examplesProcessed = examplesProcessed.map((example) => {
		const exampleProcessed = {};
		example.forEach((val, i) => {
			if (attribs[i] === label) {
				exampleProcessed['label'] = val; 
			} else {
				exampleProcessed[attribs[i]] = val;
			}
		});
		return exampleProcessed;
	});
}