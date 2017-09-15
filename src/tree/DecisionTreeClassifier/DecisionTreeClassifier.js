import fit from './fit';
import predict from './predict';

const members = {
  fit,
  predict,
};

class DecisionTreeClassifier {
  constructor() {
    Object.keys(members).forEach((key) => {
      this[key] = members[key];
    });
  }
}

export default DecisionTreeClassifier;