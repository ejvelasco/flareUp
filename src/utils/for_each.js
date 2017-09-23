import { is_object_literal, is_array } from './index';

function for_each(structure, fn) {
  if (is_array(structure)) {
    structure.forEach((element, i) => {
      fn(structure, i);
    });
  } else if (is_object_literal(structure)) {
    Object.keys(structure).forEach((key) => {
      fn(structure, key);
    });
  }
}

export default for_each;