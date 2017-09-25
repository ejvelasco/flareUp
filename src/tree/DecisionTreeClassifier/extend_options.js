import { length, mode } from '../../utils/index';
import { criteria } from '../utils';

function extend_options(options) {
  options['criterion_fn'] = criteria[options['criterion']];
  options['criterion_y'] =  options.criterion_fn(options['y']);
  options['depth'] = 1;
  options['voter_fn'] = mode;
  options['y_length'] = length(options['y']);
  options['y_parent'] = options['y'];
  options['y_parent_default'] = mode(options['y']);
  return options;
}

export default extend_options;