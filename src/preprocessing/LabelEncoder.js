import { 
  intersection,
  length, 
  no_duplicates,
   } from '../utils/index';

class LabelEncoder {
  contructor() {
    this['labels'] = null;
  }
  fit(y) {
    this['labels'] = no_duplicates(y);
  }
  fit_transform(y) {

  }
  transform(y) {
    const labels = this['labels'];
    const current_labels = no_duplicates(y);
    const labels_intersection = intersection(labels, current_labels);
    if (length(labels_intersection) < length(labels)) {
      const labels_difference = difference(labels, current_labels);
      const message = 'y contains new labes: ${classes_difference}';
      throw new Error()
    }
  }
}

export default LabelEncoder;