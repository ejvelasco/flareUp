import { format } from '../../utils/utils';
import predict from './predict';
import pretty from './pretty';
import split from './split';
import toConditionals from './toConditionals';
import fit from './fit';

const members = {
  fit,
  format,
  pretty,
  predict,
  split,
  toConditionals,
};

class DecisionTreeClassifier {
  constructor() {
    this.tree = null;
  }
}

Object.keys(members).forEach((key) => {
  DecisionTreeClassifier[key] = members[key];      
});

export default DecisionTreeClassifier;