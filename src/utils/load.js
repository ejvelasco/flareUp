import csv from 'fast-csv';
import fs from 'fs';

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
      data.push(chunk);
    })
    .on('end', () => {
      onEnd(data);
    });
  dataStream.pipe(csvStream).on('error', onError);
}

export default load;