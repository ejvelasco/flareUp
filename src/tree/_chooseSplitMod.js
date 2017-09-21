import { range } from '../utils/utils';
import _criteria from './_criteria';

function _chooseSplitMod(options, criterion) {
  const maxFeatures = options['maxFeatures'];
  let features = options['features'];
  let best;
  if (maxFeatures) {
    const featureSubset = [];
    range(maxFeatures).forEach(() => {
      const randomIndex = Math.floor(Math.random() * features.length);
      featureSubset.push(features[randomIndex]);
    });
    features = featureSubset;
  }
  features.forEach((feature) => {
    const values = options['examples'].map(example => example[feature]);
    const valuesNoDuplicates = [... new Set(values)];
    const averages = valuesNoDuplicates.map((value, i) => {
      const nextValue = valuesNoDuplicates[i + 1] || value;
      const result = (value + nextValue) / 2;
      return result;
    });
    averages.forEach((value) => {
      const left = options['examples'].filter(example => example[feature] <= value);
      const right = options['examples'].filter(example => example[feature] > value);
      const leftLabels = left.map(example => example['label']);
      const rightLabels = right.map(example => example['label']);
      const split = {
        feature, 
        left,
        leftLabels,
        right,
        rightLabels,
        cost: criterion(leftLabels, rightLabels),
        criterion: options['criterion'],
        threshold: value, 
      };
      if (typeof best === 'undefined' || split['cost'] < best['cost']) {
        best = split;
      }
    });
  });
  return best;
}

export default _chooseSplitMod;