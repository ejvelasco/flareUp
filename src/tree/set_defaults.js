import { each } from '../utils/index';

function _set_defaults(options, _defaults) {
  each(options, (key, value) => {
    _defaults[key] = value;
  });
  return _defaults;
}

export default _set_defaults;