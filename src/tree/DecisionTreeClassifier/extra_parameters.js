import { length, mode } from '../../utils/index';
import { criteria } from '../utils';

function _extra_parameters(options) {
  options['depth'] = 1;
  options['y_length'] = length(options['y']);
  options['y_parent'] = options['y'];
  options['y_parent_voted'] = mode(options['y']);
  options['voter_fn'] = mode;
  options['criterion_fn'] = criteria[options['criterion']];
  options['criterion_y'] =  options.criterion_fn(options['y']);
  return options;
}

export default _extra_parameters;