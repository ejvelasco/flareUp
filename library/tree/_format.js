import { shuffle, columns } from '../utils/index';

function categoriesToIntegers(array) {
  const categories = {};
  let categoryCount = 1;
  const result = array.map((element) => {
    if (typeof categories[element] === 'number') {
      categories[element] = categoryCount;
    } else {
      categoryCount += 1;
      categories[element] = categoryCount;
    }
  });
  return result;
}

function toNumbers(array) {
  const result = array.map(element => Number(element));
  return result;
}

function isCategorical(array) {
  const result = array.some(element => Number(element) != element);
  return result;
}

function transpose(array) {
  const result = array[0].map((column, i) => array.map(row => row[i]));
  return result;
}

function toExample(row, features, label) {
  const example = {};
  row.forEach((value, i) => {
    const currentFeature = features[i];
    if (currentFeature === label) {
      example['label'] = value; 
    } else {
      example[currentFeature] = value;
    }
  });
  return example;
}

function _format(data, features, label) {
  const firstRow = data[0];
  let examples = []; 
  firstRow.forEach((element, i) => {
    const column = columns(data, i, i + 1);
    const formatted = isCategorical(column) ? categoriesToIntegers(column) : toNumbers(column); 
    examples.push(formatted);
  });
  examples = transpose(examples);
  examples = examples.map((row) => toExample(row, features, label));
  examples = shuffle(examples);
  return examples;
}

export default _format;