import each from './each';
import length from './length';
import range from './range';
import transpose from './transpose';

function columns(array = [], start = 0, end) {
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  const result = [];
  each(range(start, end), (value) => {
    const column = array.map(row => row[value]);
    result.push(column);
  });
  if (length(result) === 1) {
    return result[0];
  }
  return transpose(result);
}

export default columns;