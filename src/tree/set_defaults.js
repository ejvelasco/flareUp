import { each } from '../utils/index';

function set_defaults(options, defaults) {
  each(options, (key, value) => {
    defaults[key] = value;
  });
  return defaults;
}

export default set_defaults;