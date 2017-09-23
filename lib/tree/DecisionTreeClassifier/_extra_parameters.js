'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../utils/index');

var _utils = require('../_utils');

function _extra_parameters(options) {
  options['criterion_method'] = _utils._criteria[options['criterion']];
  options['voter_method'] = _index.mode;
  options['voted_label_parent'] = (0, _index.mode)(options['y']);
  return options;
}

exports.default = _extra_parameters;