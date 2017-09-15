import { gini } from '../../utils/utils';

function _cost(left, right) {
  const M_L = left.length;
  const M_R = right.length;
  const M = M_L + M_R;
  return (M_L / M) * gini(left) + (M_R / M) * gini(right); 
}

export default _cost;