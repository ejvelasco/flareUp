import { range } from '../utils/utils';
import _cost from './DecisionTreeClassifier/_cost';

function _chooseSplit(options) {
  const splits = [];
  const maxFeatures = options['maxFeatures'];
  let features = options['features'];
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
      const split = {
        feature, 
        left,
        right,
        threshold: value,
        cost: _cost(left, right), 
      };
      splits.push(split);
    });
  });
  splits.sort((a, b) => a['cost'] - b['cost']);
  return splits[0];
}

export default _chooseSplit;