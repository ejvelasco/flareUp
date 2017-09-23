// import fs from 'fs';
// import is_object_literal from './isObjectLiteral';

// function onError(error) {
//   throw error;
// }

// function exampleToCSV(example) {
//   const values = [];
//   Object.keys(example).forEach((key) => {
//     const value = example[key];
//     values.push(value);
//   });
//   const line = values.join(',') + '\n'; 
//   return line;
// }

// function isFunction(item) {
//   const result = typeof item === 'function';
//   return result;
// }

// function save(data = [], features = [], fileName = '', onEnd) {
//   const documentation = 'Please review the documentation on flareUp.save().';
//   if (!data) {
//     const message = `Empty data array. ${documentation}`;
//     throw new Error(message);
//   }
//   if (!features) {
//     const message = `Empty features array. ${documentation}`;
//     throw new Error(message);
//   }
//   if (!fileName) {
//     const message = `No target file name was provided. ${documentation}`;
//     throw new Error(message);  
//   }
//   if (data.some(example => isObjectLiteral(example) === false)) {
//     const message = `Invalid data array elements. ${documentation}`;
//     throw new Error(message);
//   }
//   if (!isFunction(onEnd) && onEnd) {
//     const message = `onEnd is not a function. ${documentation}`;
//     throw new Error(message);
//   }
//   const dataStream = fs.createWriteStream(fileName)
//     .on('error', onError);
//   dataStream.write(features.join(',') + '\n');
//   data.forEach((example) => {
//     dataStream.write(exampleToCSV(example));  
//   });
//   dataStream.end(onEnd);
// }

// export default save;
"use strict";