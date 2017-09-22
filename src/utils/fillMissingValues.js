import mean from './mean';
import mode from './mode';

function isIntArray(array) {
  const result =  array.every(element => element === Math.floor(element));
  return result;
}

function replaceMissing(array, missing, filler) {
  const result = array.map(element => (element === missing) ? filler : element);
  return result;
}

function fillMissingValues(array, missing) {
  const arrayMode = mode(array);
  const arrayMean = mean(array); 
  let result;
  if (isIntArray(array)) {
    result = replaceMissing(array, missing, arrayMode);
  } else {
    result = replaceMissing(array, missing, arrayMean); 

  }
  return result;
}

export default fillMissingValues;