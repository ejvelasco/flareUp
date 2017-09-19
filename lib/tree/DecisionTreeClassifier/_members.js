'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fit = require('./fit');

var _fit2 = _interopRequireDefault(_fit);

var _predict = require('./predict');

var _predict2 = _interopRequireDefault(_predict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var members = {
  fit: _fit2.default,
  predict: _predict2.default
};

exports.default = members;