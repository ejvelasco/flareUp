'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../_utils');

var _defaults2 = require('./_defaults');

var _defaults3 = _interopRequireDefault(_defaults2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fit(options) {
  this.rootNode = (0, _utils._treeBuilderWrapper)(options, _defaults3.default, 'gini', 'mode');
}

exports.default = fit;