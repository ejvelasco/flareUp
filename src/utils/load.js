import csv from 'fast-csv';
import fs from 'fs';

function on_error(error) {
  throw error; 
}

function load(file_name = '', on_end) {
  const documentation = 'Please review the documentation on flareUp.load().';
  if (!file_name) {
    const message = `No target file name was provided. ${documentation}`;
    throw new Error(message);  
  }
  const data = [];
  const data_stream = fs.createReadStream(file_name);
  const csv_stream = csv()
    .on('data', (chunk) => {
      const row = chunk.map(value => {
        const number_value = Number(value);
        return (value == number_value) ? number_value : value;
      });
      data.push(row);
    })
    .on('end', () => {
      on_end(data);
    });
  data_stream.pipe(csv_stream).on('error', on_error);
}

export default load;
