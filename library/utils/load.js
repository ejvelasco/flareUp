const fs = require('fs');
const csv = require('fast-csv');

function onError(err) {
	throw(err);
}

function onData(data, chunk) {
	data.push(chunk);
}

function load(fileName = '', onEnd) {
	const docs = 'Please review the documentation on flareUp.load().';
	if (!fileName.length) {
		const msg = `No target file name was provided. ${docs}`;
		throw(new Error(msg));	
	}
	const data = [];
	const stream = fs.createReadStream(fileName);
	const csvStream = csv()
		.on('error', onError)
		.on('data', (chunk) => { 
			onData(data, chunk); 
		})
		.on('end', () => {
			onEnd(data);
		});
	stream.pipe(csvStream);
}

module.exports = load;