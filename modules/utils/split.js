import range from './range';
import shuffle from './shuffle';

function setDefaults(options, defaults) {
  Object.keys(defaults).forEach((key) => {
    if (typeof options[key] !== 'undefined') {
      defaults[key] = options[key];
    }
  });
  return defaults;
}

function split(options) {
  const defaults = {
    examples: [],
    fractionToTrain: .8,
    stratified: true 
  };
  const documentation = 'Please review the flareUp.split docs';
  options = setDefaults(options, defaults);
  if (!options['examples']) {
    const message = `Empty data array. ${documentation}`;
    throw new Error(message);
  }
  const {examples, fractionToTrain, stratified} = options;
  if (stratified === true) {
    const numberOfExamples = examples.length;
    const labels = examples.map(example => example['label']);
    const labelsNoDuplicates = [... new Set(labels)];
    const groupedByLabel = [];
    labelsNoDuplicates.forEach((label) => {
      const group = examples.filter(example => example['label'] === label);
      groupedByLabel.push(group);
    });
    const labelRatios = groupedByLabel.map(group => group.length / numberOfExamples);
    const trainExamples = [];
    labelRatios.forEach((ratio, i) => {
      let representativeSize = Math.floor(ratio * fractionToTrain * numberOfExamples);
      const group = groupedByLabel[i];
      range(representativeSize).forEach(() => {
        const randomIndex = Math.floor(Math.random() * group.length);
        trainExamples.push(group[randomIndex]);
        group.splice(randomIndex, 1);
      });
      groupedByLabel[i] = group;
    });
    const testExamples = groupedByLabel.reduce((a, b) => a.concat(b));
    return [shuffle(trainExamples), shuffle(testExamples)];
  } else {
    const i = Math.floor(examples.length * fractionToTrain);
    return [examples.slice(0, i), examples.slice(i, examples.length)];
  }
}

export default split;