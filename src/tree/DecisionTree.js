import { length, sum } from './../utils/index';
import { traverse_tree } from './utils';

class DecisionTree {
  predict(X) {
    const root_node = this['root_node'];
    return X.map(sample =>  traverse_tree(root_node, sample));
  }
  score(X, y) {
    const y_predicted = this.predict(X);
    const scores = y.map((label_actual, i) => {
      const label_predicted = y_predicted[i];
      const result = label_actual === label_predicted; 
      return result ? 1 : 0;
    }); 
    return sum(scores) / length(y);
  }
}

export default DecisionTree;