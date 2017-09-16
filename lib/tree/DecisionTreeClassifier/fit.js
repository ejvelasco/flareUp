'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./_utils');

function fit(options) {
  this.rootNode = (0, _utils._decisionTree)(options);
}

exports.default = fit;