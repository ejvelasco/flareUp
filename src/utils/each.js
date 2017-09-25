import { is_object_literal, is_array } from './index';

function each(structure, fn) {
  if (is_array(structure)) {
    structure.forEach((element, i) => {
      if (typeof structure === 'undefined') {
        fn(i);  
      } else {
        fn(structure[i], i);        
      }
    });
  } else if (is_object_literal(structure)) {
    Object.keys(structure).forEach((key) => {
      if (typeof structure === 'undefined') {
        fn(key);  
      } else {
        fn(structure[key], key);        
      }
    });
  }
}

export default each;