function _probabilityOfLabels(examples, labels) {
  const labelByProbability = {};
  const labelsNoDuplicates = [... new Set(labels)];
  labelsNoDuplicates.forEach((label) => {
    const examplesWithLabel = examples.filter(example => example['label'] === label);
    const probability = (examplesWithLabel.length / examples.length);
    labelByProbability[label] = probability;
  });
  return labelByProbability;
  
}

export default _probabilityOfLabels;