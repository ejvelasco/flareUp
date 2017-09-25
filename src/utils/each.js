import { is_object_literal, is_array } from './index';

function each(structure, fn) {
  if (is_array(structure)) {
    structure.forEach((element, i) => {
      fn(structure[i], i);        
    });
  } else if (is_object_literal(structure)) {
    Object.keys(structure).forEach((key) => {  
      fn(key, structure[key]);        
    });
  }
}

export default each;