import mean from './mean';

function MSE(examples) {
  const labels = examples.map(example => example['label']);
  const predictedValue = mean(labels);
  const errors = labels.map(label => predictedValue - label);
  const squareErrors = errors.map(error => error ** 2);
  const result = mean(squareErrors);
  return result;
}

export default MSE;