const fs = require('fs');
const csv = require('fast-csv');

function load(fileName, fileType) {
	const dataSet = [];
	const stream = fs.createReadStream(fileName);
	const csvStream = csv().on('data', onData).on('end', onEnd);
	
	stream.pipe(csvStream);
}