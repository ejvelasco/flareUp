import { 
  difference,
  length, 
  no_duplicates,
} from '../utils/index';

class LabelEncoder {
  contructor() {
    this['labels'] = null;
  }
  fit(y) {
    this['labels'] = no_duplicates(y);
    return this;
  }
  fit_transform(y) {
    this['labels'] = no_duplicates(y);
    return this.transform(y);
  }
  transform(y) {
    const labels = this['labels'];
    const current_labels = no_duplicates(y);
    const tip = 'Please review the documentation for flareUp.preprocessing.LabelEncoder';
    if (length(labels) < length(current_labels)) {
      const labels_difference = difference(labels, current_labels).join(', ');
      const message = `y contains new labels: ${labels_difference}. ${tip}`;
      throw new Error(message);
    }
    const result = y.map((label) => labels.indexOf(label));
    return result;
  }
}

export default LabelEncoder;