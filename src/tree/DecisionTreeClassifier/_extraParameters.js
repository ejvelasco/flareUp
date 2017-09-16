import { gini } from '../../utils/utils';

function _extraParameters(options, examples) {  
  options['N'] = examples.length;
  options['depth'] = 1;
  options['impurity'] = gini(examples);
  return options;
}

export default _extraParameters;