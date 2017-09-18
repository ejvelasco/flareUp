'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../_utils');

var _utils2 = require('./_utils');

function fit(options) {
  this.rootNode = (0, _utils._treeBuilderWrapper)(options, _utils2._defaults, 'gini', 'mode');
}

exports.default = fit;