import ensemble from './ensemble/ensemble';
import tree from './tree/tree';
import utils from './utils/utils';

const flareUp = {
  ensemble,
  tree, 
  ...utils,
}; 

export {
  ensemble,
  tree, 
  utils,
};

export default flareUp;

