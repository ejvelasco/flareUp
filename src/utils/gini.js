function gini(examples) {
  const labels = examples.map((example) => example['label']);
  const labelsNoDuplicates = [... new Set(labels)];
  let probabilitySquaredSum = 0;
  labelsNoDuplicates.forEach((label) => {
    const examplesWithLabel = examples.filter((example) => example['label'] === label);
    const labelProbability = examplesWithLabel.length / examples.length; 
    probabilitySquaredSum += labelProbability ** 2;
  });
  const result = 1 - probabilitySquaredSum;
  return result;
}

export default gini;