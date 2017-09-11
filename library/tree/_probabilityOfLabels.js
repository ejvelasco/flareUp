function _probabilityOfLabels(examples, labels) {
  const labelByProbability = {};
  labels.forEach((label) => {
    const filtered = examples.filter(example => example['label'] === label);
    const probability = (filtered.length / labels.length);
    labelByProbability[label] = probability.toFixed(4);
  });
  return labelByProbability;
  
}

export default _probabilityOfLabels;