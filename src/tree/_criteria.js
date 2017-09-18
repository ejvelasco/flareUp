import { weightedGini, MSE } from '../utils/utils';

const _criteria = {
  mse: MSE,
  gini: weightedGini,
};

export default _criteria;