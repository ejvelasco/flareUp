'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../utils/index');

var _utils = require('../utils');

function extend_options(options) {
  options['criterion_fn'] = _utils.criteria[options['criterion']];
  options['criterion_y'] = options.criterion_fn(options['y']);
  options['depth'] = 1;
  options['voter_fn'] = _index.mode;
  options['y_length'] = (0, _index.length)(options['y']);
  options['y_parent'] = options['y'];
  options['y_parent_default'] = (0, _index.mode)(options['y']);
  return options;
}

exports.default = extend_options;