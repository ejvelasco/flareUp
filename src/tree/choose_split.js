import { 
  columns, 
  each, 
  length, 
  no_duplicates, 
  range, 
  transpose, 
} from '../utils/index';

function random_index(array) {
  return Math.floor(Math.random() * length(array));
}

function random_subset(X, max_features) {
  const subset = [];
  const x_0 = X[0];
  const indices_used = new Set();
  each(range(max_features), () => {
    let index = random_index(x_0);
    if (indices_used.has(index)) {
      let new_index = index;
      while (new_index == index) {
        new_index = random_index(x_0);
      }
      index = new_index;
    }
    indices_used.add(index);
    subset.push(columns(X, index, index + 1));
  });
  return transpose(subset);
}

function choose_split(classifier) {
  const max_features = classifier['max_features'];
  let best_split = null;
  const X_subset = (max_features === null) ? classifier['X'] : random_subset(classifier['X'], max_features);
  const row = X_subset[0];
  each(row, (value, j) => {
    const column = columns(X_subset, j, j + 1);
    const thresholds = no_duplicates(column);
    each(thresholds, (threshold) => { 
      const X_left = [];
      const y_left = [];
      const X_right = [];
      const y_right = [];
      each(column, (value, i) => {
        const label = classifier['y'][i];
        if (value <= threshold) {
          X_left.push(X_subset[i]);
          y_left.push(label);
        } else {
          X_right.push(X_subset[i]);
          y_right.push(label);
        }
      });
      const split = {
        threshold, 
        X_left,
        y_left,
        X_right,
        y_right,
        feature_index: j,
        criterion: classifier['criterion'],
        cost: classifier.criterion_fn(y_left, y_right),
      };
      if (best_split === null || split['cost'] < best_split['cost']) {
        best_split = split;
      }
    });
  });
  return best_split;
}

export default choose_split;