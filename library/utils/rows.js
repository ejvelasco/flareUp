import range from './range';

function rows(array = [], start = 0, end) {  
  if (end === undefined) {
    end = start;
    start = 0;
  }
  const result = [];
  range(start, end).forEach(i => {
    result.push(array.filter((row, j) => j === i)[0]);
  });
  if (result.length === 1) {
    return result[0];
  }
  return result;
}

export default rows;
