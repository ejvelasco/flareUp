import { gini } from '../../utils/utils';

function _cost(left, right) {
  const M_L = left.length;
  const M_R = right.length;
  const M = M_L + M_R;
  const result = (M_L / M) * gini(left) + (M_R / M) * gini(right); 
  return result;
}

export default _cost;