'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./_utils');

function _treeBuilderWrapper(options, defaults, impurity, voter) {
  options = (0, _utils._setDefaults)(options, defaults);
  impurity = _utils._impurities[impurity];
  voter = _utils._voters[voter];
  var criterion = _utils._criteria[options['criterion']];
  options = (0, _utils._extraParameters)(options, options['examples'], impurity);
  var tree = (0, _utils._treeBuilder)(options, criterion, impurity, voter);
  return tree;
}

exports.default = _treeBuilderWrapper;