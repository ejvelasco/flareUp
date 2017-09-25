import { 
  columns,
  difference,
  intersection,
  is_numbers_array,
  length, 
  no_duplicates,
  transpose,
} from '../utils/index';

class LabelEncoder {
  contructor() {
    this['labels'] = null;
  }
  fit(j) {
    this['labels'] = no_duplicates(j);
    return this;
  }
  fit_transform(j) {
    this['labels'] = no_duplicates(j);
    return this.transform(j);
  }
  transform(j) {
    const labels = this['labels'];
    const current_labels = no_duplicates(j);
    const tip = 'Please review the documentation for flareUp.preprocessing.LabelEncoder';
    if (length(intersection(current_labels, labels)) < length(labels)) {
      const labels_difference = difference(labels, current_labels).join(', ');
      const message = `j contains new labels: ${labels_difference}. ${tip}`;
      throw new Error(message);
    }
    const result = j.map((label) => labels.indexOf(label));
    return result;
  }
  transform_2d(X) {
    const label_encoder = this;
    const first_row = X[0];
    const result = first_row.map((values, i) => {
      const j = columns(X, i, i + 1);
      const j_processed = is_numbers_array(j) ? j : label_encoder.fit_transform(j);
      return j_processed; 
    });
    return transpose(result);
  }
}

export default LabelEncoder;