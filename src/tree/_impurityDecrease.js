import _criteria from './_criteria';

function _impurityDecrease(options, split, criterion) {
  const N_C_R = split['right'].length;
  const N_C_L = split['left'].length;
  const N_C = N_C_R + N_C_L;
  const criterionRight = criterion(split['rightLabels']);
  const criterionLeft = criterion(split['leftLabels']);
  const result = (N_C / options['N']) * (options['impurity'] - N_C_R / N_C * criterionRight - N_C_L / N_C * criterionLeft);
  return result;
}

export default _impurityDecrease;