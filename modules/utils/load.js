import fs from 'fs';
import csv from 'fast-csv';

function onData(data, chunk) {
  data.push(chunk);
}

function onError(error) {
  throw error; 
}

function load(fileName = '', onEnd) {
  const documentation = 'Please review the documentation on flareUp.load().';
  if (!fileName) {
    const message = `No target file name was provided. ${documentation}`;
    throw new Error(message);  
  }
  const data = [];
  const dataStream = fs.createReadStream(fileName);
  const csvStream = csv()
    .on('data', (chunk) => {
      onData(chunk, data);
    })
    .on('end', onEnd);
  dataStream.pipe(csvStream).on(onError);
}

export default load;