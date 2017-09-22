import ensemble from './ensemble/index';
import preprocessing from './preprocessing/index';
import tree from './tree/index';
import utils from './utils/index';

const flareUp = {
  ensemble,
  preprocessing,
  tree, 
  ...utils,
}; 

export {
  ensemble,
  preprocessing,
  tree, 
  utils,
};

export default flareUp;

