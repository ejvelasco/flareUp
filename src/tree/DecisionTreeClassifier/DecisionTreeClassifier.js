import _members from './_members';

class DecisionTreeClassifier {
  constructor() {
    Object.keys(_members).forEach((key) => {
      this[key] = _members[key];
    });
  }
}

export default DecisionTreeClassifier;