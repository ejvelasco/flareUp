import range from './range';

function columns(array = [], start = 0, end) {
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  const result = [];
  range(start, end).forEach((i) => {
    const column = array.map(row => row[i]);
    result.push(column);
  });
  if (result.length === 1) {
    return result[0];
  }
  return result;
}

export default columns;