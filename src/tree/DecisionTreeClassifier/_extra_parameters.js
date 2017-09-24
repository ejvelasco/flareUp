import { mode } from '../../utils/index';
import { _criteria } from '../_utils';

function label(X, y) {
  return X.map((x, i) => x.push(y[i]));
}

function _extra_parameters(options) {
  options['depth'] = 1;
  // options['X_y'] = label(options['X'], options['y']); 
  options['parent_y'] = options['y'];
  options['voted_y_parent'] = mode(options['y']);
  options['voter_fn'] = mode;
  options['criterion_fn'] = _criteria[options['criterion']];
  return options;
}

export default _extra_parameters;