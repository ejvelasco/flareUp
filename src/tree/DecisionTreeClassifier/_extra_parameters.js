import { mode } from '../../utils/index';
import { _criteria } from '../_utils';

function _extra_parameters(options) {
  options['criterion_method'] = _criteria[options['criterion']];
  options['voter_method'] = mode;
  options['voted_label_parent'] = mode(options['y']);
  return options;
}

export default _extra_parameters;