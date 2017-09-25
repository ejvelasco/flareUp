import each from './each';
import length from './length';
import no_duplicates from './no_duplicates';

function element_probability(x) {
  const probabilities = {};
  const x_no_duplicates = no_duplicates(x);
  each(x_no_duplicates, (current_element) => {
    const equal_elements = x_no_duplicates.filter(element => element === current_element);
    const probability = length(equal_elements) / length(x);
    probabilities[current_element] = probability; 
  });
  return probabilities;
}

export default element_probability;