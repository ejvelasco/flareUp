import { columns, for_each, length, mean, no_duplicates, range, transpose } from '../utils/index';

function label(X, y) {
  return X.map((x, i) => x.slice().push(y[i]));
}

function random_element(array) {
  const random_index = Math.floor(Math.random() * length(array));
  return array[random_index];
}

function get_random_index(array) {
  return Math.floor(Math.random() * length(array));
}

function _random_subset(X, max_features) {
  const subset = [];
  const x_0 = X[0];
  const indices_used = new Set();
  for_each(range(max_features), () => {
    let random_index = get_random_index(x_0);
    if (indices_used.has(random_index)) {
      let new_random_index = random_index;
      while (new_random_index == random_index) {
        new_random_index = get_random_index(x_0);
      }
      random_index = new_random_index;
    }
    indices_used.add(random_index);
    subset.push(columns(X, random_index, random_index + 1));
  });
  return transpose(subset);
}

function _choose_split(classifier) {
  const max_features = classifier['max_features'];
  let best_split = null;
  const X_subset = (max_features === null) ? classifier['X'] : _random_subset(classifier['X'], max_features);
  const first_row = X_subset[0];
  for_each(first_row, (first_row_value, j) => {
    const jth_column = columns(X_subset, j, j + 1);
    const jth_values = no_duplicates(jth_column);
    const pair_wise_means = jth_values.map((value, i) => {
      const next_value = jth_values[i + 1] || value;
      const pair = [value, next_value];
      return mean(pair);
    });
    for_each(pair_wise_means, (pair_wise_means, k) => { 
      const current_mean = pair_wise_means[k];
      const left_values = [];
      const left_labels = [];
      const right_values = [];
      const right_labels = [];
      for_each(jth_column, (jth_column, i) => {
        const current_value = jth_column[i]; 
        const current_label = classifier['y'][i];
        if (jth_column[i] <= current_mean) {
          left_values.push(current_value);
          left_labels.push(current_label);
        } else {
          right_values.push(current_value);
          right_labels.push(current_label);
        }
      });
      const split = {
        left_values,
        left_labels,
        right_values,
        right_labels,
        column_index: j,
        threshold: current_mean, 
        criterion: classifier['criterion'],
        cost: classifier.criterion_fn(left_labels, right_labels),
      };
      if (best_split === null || split['cost'] < best_split['cost']) {
        best_split = split;
      }
    });
  });
  return best_split;
}

export default _choose_split;