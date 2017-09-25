import { 
  columns, 
  difference,
  each,
  intersection,
  is_numbers_array,
  length, 
  no_duplicates,
  transpose,
} from '../utils/index';

class LabelEncoder {
  contructor() {
    this['y'] = null;
  }
  fit(y) {
    this['y'] = no_duplicates(y);
    return this;
  }
  fit_transform(y) {
    this['y'] = no_duplicates(y);
    return this.transform(y);
  }
  transform_1d(y) {
    const y_past = this['y'];
    const y_current = no_duplicates(y);
    const documentation = 'Please review the documentation for flareUp.preprocessing.LabelEncoder';
    if (length(intersection(y_current, y_past)) < length(y_past)) {
      const y_difference = difference(y_past, y_current);
      const message = `Array contains new labels: ${y_difference}. ${documentation}`;
      throw new Error(message);
    }
    const y_current_map = {};
    each(y_current, (label, i) => {
      y_current_map[label] = i;
    });
    const result = y.map((label) => y_current_map[label]);
    return result;
  }
  transform_2d(X) {
    const row = X[0];
    const result = row.map((values, i) => {
      const column = columns(X, i, i + 1);
      const column_encoded = is_numbers_array(column) ? column : this.fit_transform(column);
      return column_encoded; 
    });
    return transpose(result);
  }
}

export default LabelEncoder;