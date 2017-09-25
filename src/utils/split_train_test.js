import length from './length';
import shuffle from './shuffle';

function split_train_test(options) {
  const index = Math.floor(options['train_size'] * length(options['X']));
  const X = options['X'];
  const y = options['y'];
  const X_train = X.slice(0, index);
  const X_test =  X.slice(index, length(X));
  const y_train = y.slice(0, index);
  const y_test = y.slice(index, length(y));
  return [X_train, X_test, y_train, y_test];
}


export default split_train_test;