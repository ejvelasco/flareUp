import sum from './sum';

function g(array) {
  if (array.length == 0) {
    return 0;
  }
  const arrayNoDuplicates = [... new Set(array)];
  const probabilities = arrayNoDuplicates.map((value) => {
    const elementsWithValue = array.filter(element => element === value);
    const probability = (elementsWithValue.length / array.length) ** 2;
    return probability;
  }); 
  const probabilitySum = probabilities.reduce((a, b) => a + b);
  const result = 1 - probabilitySum;
  return result;
}

function gini(left, right) {
  if (!right) {
    return g(left);
  }
  const M_L = left.length;
  const M_R = right.length; 
  const M = M_L + M_R;
  const result = (M_L / M) * g(left) + (M_R / M) * g(right);
  return result;
}

export default gini;