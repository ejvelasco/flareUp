import { each } from '../utils/index';

function _set_defaults(options, _defaults) {
  each(options, (options, key) => {
    _defaults[key] = options[key];
  });
  return _defaults;
}

export default _set_defaults;