'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var _criteria = {
  mse: _utils.MSE,
  gini: _utils.weightedGini
};

exports.default = _criteria;