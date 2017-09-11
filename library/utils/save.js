const fs = require('fs');
const isObject = require('./isObject');

function onError(err) {
	throw(err);
}

function exampleToCSV(example) {
	const vals = [];
	Object.keys(example).forEach((key) => {
		vals.push(example[key]);
	});
	const line = vals.join(',') + '\n'; 
	return line;
}

function isFunction(a) {
	return typeof a === 'function';
}

function save(data = [], attribs = [], fileName = '', onEnd) {
	const docs = 'Please review the documentation on flareUp.save().';
	if (!data.length) {
		const msg = `Empty data array. ${docs}`;
		throw(new Error(msg));
	}
	if (!attribs.length) {
		const msg = `Empty attributes array. ${docs}`;
		throw(new Error(msg));
	}
	if (!fileName.length) {
		const msg = `No target file name was provided. ${docs}`;
		throw(new Error(msg));	
	}
	if(data.some(example => isObject(example) === false)) {
		const msg = `Invalid data array elements. ${docs}`;
		throw(new Error(msg));
	}
	if (!isFunction(onEnd) && onEnd) {
		const msg = `onEnd is not a function. ${docs}`;
		throw(new Error(msg));
	}
	const stream = fs.createWriteStream(fileName)
		.on('error', onError);
	stream.write(attribs.join(',') + '\n');
	data.forEach((example) => {
		stream.write(exampleToCSV(example));	
	});
	stream.end(onEnd);
}

module.exports = save;
