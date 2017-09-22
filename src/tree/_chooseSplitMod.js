import _criteria from './_criteria';

function _averageAdjacentPairs(values) {
  const result = values.map((value, i) => {
    const nextValue = values[i + 1] || value;
    const pairAverage = (value + nextValue) / 2;
    return pairAverage;
  });
  return result;
}

function _randomFeatureSubset(features, maxFeatures) {
  const featureSubset = [];
  maxFeatures.forEach(() => {
    const randomIndex = Math.floor(Math.random() * features.length);
    featureSubset.push(features[randomIndex]);
  });
}

function _splitAtValue(options, feature, value, criterion) {
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
  return split;
}

function _chooseSplitMod(options, criterion) {
  let bestSplit = null; 
  const maxFeatures = options['maxFeatures'];
  const features = (maxFeatures === null) ? options['features'] : _randomFeatureSubset(options['features'], maxFeatures);
  features.forEach((feature) => {
    const values = options['examples'].map(example => example[feature]);
    const valuesNoDuplicates = [... new Set(values)];
    const averages = _averageAdjacentPairs(valuesNoDuplicates);
    const splits = averages.map(value => _splitAtValue(options, feature, value, criterion));
    // const splits = valuesNoDuplicates.map(value => _splitAtValue(options, feature, value, criterion)); 
    splits.forEach((split) => {
      if (bestSplit === null || split['cost'] < bestSplit['cost']) {
        bestSplit = split;
      }
    });
  });
  return bestSplit;
}

export default _chooseSplitMod;