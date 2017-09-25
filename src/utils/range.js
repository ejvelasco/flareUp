function isInteger(number) {
  return number === Math.floor(number);
}

function range(start, end, step) {
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  if (typeof step !== 'number') {
    step = 1;
  }
  const documentation = 'Please review the flareUp.range() documentation.';
  const parameters = [start, end, step];
  if (parameters.some(number => isInteger(number) === false)) {
    const message = `Invalid parameters. ${documentation}`;
    throw new Error(message);
  }
  if ((step > 0 && start >= end) || (step < 0 && start <= end)) {
    return [];
  } 
  const result = [];
  step = Math.floor(step);
  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i);
  }
  return result;
}

export default range;