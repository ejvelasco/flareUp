import shuffle from './shuffle';
import columns from './columns';
import transpose from './transpose';
import fillMissingValues from './fillMissingValues';

function categoriesToIntegers(array) {
  const categories = {};
  let categoryCount = 0;
  array.forEach((element) => {
    if (typeof categories[element] === 'undefined') {
      categories[element] = categoryCount;
      categoryCount += 1;
    }
  });
  const result = array.map((element) => categories[element]);
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

function toExampleObject(row, i, features, labels) {
  const example = {};
  row.forEach((value, i) => {
    const currentFeature = features[i];
    example[currentFeature] = value;
  });
  example['label'] = labels[i]; 
  return example;
}

function format(features, examples, labels) {
  const firstRow = examples[0];
  let processed = []; 
  firstRow.forEach((element, i) => {
    let column = columns(examples, i, i + 1);
    column = isCategorical(column) ? categoriesToIntegers(column) : toNumbers(column);
    processed.push(column);
  });
  examples = transpose(processed);
  labels = categoriesToIntegers(labels);
  examples = examples.map((row, i) => toExampleObject(row, i, features, labels));
  return shuffle(examples);
}

export default format;