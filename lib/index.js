'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.tree = exports.ensemble = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ensemble = require('./ensemble/ensemble');

var _ensemble2 = _interopRequireDefault(_ensemble);

var _tree = require('./tree/tree');

var _tree2 = _interopRequireDefault(_tree);

var _preprocessing = require('./preprocessing');

var _preprocessing2 = _interopRequireDefault(_preprocessing);

var _utils = require('./utils/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flareUp = _extends({
  ensemble: _ensemble2.default,
  tree: _tree2.default
}, _utils2.default);

exports.ensemble = _ensemble2.default;
exports.tree = _tree2.default;
exports.utils = _utils2.default;
exports.default = flareUp;