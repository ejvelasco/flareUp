'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./_utils');

function _treeBuilderWrapper(options, defaults) {
  options = (0, _utils._setDefaults)(options, defaults);
  var voter = _utils._voters[options['voter']];
  var criterion = _utils._criteria[options['criterion']];
  options = (0, _utils._extraParameters)(options, criterion);
  var tree = (0, _utils._treeBuilder)(options, criterion, voter);
  return tree;
}

exports.default = _treeBuilderWrapper;