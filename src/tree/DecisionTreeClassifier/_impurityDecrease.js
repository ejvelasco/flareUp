import { gini } from '../../utils/utils';

function _impurityDecrease(options, split) {
  const N_C_R = split['right'].length;
  const N_C_L = split['left'].length;
  const N_C = N_C_R + N_C_L;
  const impurityRight = gini(split['right']);
  const impurityLeft = gini(split['left']);
  const result = (N_C / options['N']) * (options['impurity'] - N_C_R / N_C * impurityRight - N_C_L / N_C * impurityLeft);
  return result;
}

export default _impurityDecrease;