'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../utils/index');

var _utils = require('../_utils');

function label(X, y) {
  return X.map(function (x, i) {
    return x.push(y[i]);
  });
}

function _extra_parameters(options) {
  options['depth'] = 1;
  // options['X_y'] = label(options['X'], options['y']); 
  options['parent_y'] = options['y'];
  options['voted_y_parent'] = (0, _index.mode)(options['y']);
  options['voter_fn'] = _index.mode;
  options['criterion_fn'] = _utils._criteria[options['criterion']];
  return options;
}

exports.default = _extra_parameters;