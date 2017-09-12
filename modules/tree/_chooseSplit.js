function _chooseSplit(features, examples, cost) {
  const splits = [];
  features.forEach((feature) => {
    const values = examples.map(example => example[feature]);
    values.forEach((value) => {
      const left = examples.filter(example => example[feature] <= value);
      const right = examples.filter(example => example[feature] > value);
      const split = {
        feature, 
        left,
        right,
        threshold: value,
        cost: cost(feature, left, right), 
      };
      splits.push(split);
    });
  });
  splits.sort((a, b) => a['cost'] - b['cost']);
  return splits[0];
}

export default _chooseSplit;