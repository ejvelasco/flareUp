import shuffle from './shuffle';
import columns from './columns';
import transpose from './transpose';

function categoriesToIntegers(array) {
  const categories = {};
  let categoryCount = 0;
  const result = array.map((element) => {
    if (typeof categories[element] === 'undefined') {
      categoryCount += 1;
      categories[element] = categoryCount;
    }
    return categoryCount;
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
    const column = columns(examples, i, i + 1);
    const formatted = isCategorical(column) ? categoriesToIntegers(column) : toNumbers(column);
    processed.push(formatted);
  });
  examples = transpose(processed);
  examples = examples.map((row, i) => toExampleObject(row, i, features, labels));
  return shuffle(examples);
}

export default format;