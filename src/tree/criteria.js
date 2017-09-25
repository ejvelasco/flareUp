import { weighted_gini, mean_squared_error } from '../utils/index';

const criteria = {
  gini: weighted_gini,
  mse: mean_squared_error,
};

export default criteria;