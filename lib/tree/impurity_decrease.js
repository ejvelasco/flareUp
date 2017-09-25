'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../utils/index');

function _impurity_decrease(classifier, split) {
  var N_C_R = (0, _index.length)(split['y_right']);
  var N_C_L = (0, _index.length)(split['y_left']);
  var N_C = N_C_R + N_C_L;
  var criterion_y = classifier['criterion_y'];
  var criterion_y_right = classifier.criterion_fn(split['y_right']);
  var criterion_y_left = classifier.criterion_fn(split['y_left']);
  var coefficient = N_C / classifier['y_length'];
  var term_right = N_C_R / N_C * criterion_y_right;
  var term_left = N_C_L / N_C * criterion_y_left;
  return coefficient * (criterion_y - term_right - term_left);
}

exports.default = _impurity_decrease;