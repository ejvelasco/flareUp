import { 
  difference,
  length, 
  no_duplicates,
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
    if (length(labels) < length(current_labels)) {
      const labels_difference = difference(labels, current_labels).join(', ');
      const message = `j contains new labels: ${labels_difference}. ${tip}`;
      throw new Error(message);
    }
    const result = j.map((label) => labels.indexOf(label));
    return result;
  }
}

export default LabelEncoder;