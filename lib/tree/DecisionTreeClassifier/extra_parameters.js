'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../utils/index');

var _utils = require('../utils');

function _extra_parameters(options) {
  options['depth'] = 1;
  options['y_length'] = (0, _index.length)(options['y']);
  options['y_parent'] = options['y'];
  options['y_parent_voted'] = (0, _index.mode)(options['y']);
  options['voter_fn'] = _index.mode;
  options['criterion_fn'] = _utils.criteria[options['criterion']];
  options['criterion_y'] = options.criterion_fn(options['y']);
  return options;
}

exports.default = _extra_parameters;