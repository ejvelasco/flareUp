'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../utils/index');

var criteria = {
  gini: _index.weighted_gini,
  mse: _index.mean_squared_error
};

exports.default = criteria;