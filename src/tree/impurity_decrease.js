import { length } from '../utils/index';

function impurity_decrease(classifier, split) {
  const N_C_R = length(split['y_right']);
  const N_C_L = length(split['y_left']);
  const N_C = N_C_R + N_C_L;
  const criterion_y = classifier['criterion_y'];
  const criterion_y_right = classifier.criterion_fn(split['y_right']);
  const criterion_y_left = classifier.criterion_fn(split['y_left']);
  const coefficient = N_C / classifier['y_length'];
  const term_right = N_C_R / N_C * criterion_y_right;
  const term_left = N_C_L / N_C * criterion_y_left;
  return  coefficient * (criterion_y - term_right - term_left);
}

export default impurity_decrease;