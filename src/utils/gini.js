import sum from './sum';

function gini(...arrays) {
  if (arrays.length > 1) {
    const M_I = arrays.map(array => array.length);
    const M = sum(M_I);
    const terms = M_I.map((M_i, i) => (M_i / M) * gini(arrays[i]));
    const result = sum(terms);
    return result;
  }
  const array = arrays[0];
  const arrayNoDuplicates = [... new Set(array)];
  const probabilities = arrayNoDuplicates.map((value) => {
    const elementsWithValue = array.filter(element => element === value);
    const probability = (elementsWithValue.length / array.length) ** 2;
    return probability;
  }); 
  const probabilitySum = sum(probabilities);
  const result = 1 - probabilitySum;
  return result;
}

export default gini;