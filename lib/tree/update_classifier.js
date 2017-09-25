'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function update_classifier(classifier, depth, split, side) {
  classifier['depth'] = depth + 1;
  classifier['X'] = split['X_' + side];
  classifier['y'] = split['y_' + side];
  classifier['y_parent'] = classifier['y'];
  classifier['y_parent_voted'] = classifier.voter_fn(classifier['y']);
  return classifier;
}

exports.default = update_classifier;