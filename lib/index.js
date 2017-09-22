'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.tree = exports.preprocessing = exports.ensemble = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('./ensemble/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./preprocessing/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./tree/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./utils/index');

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flareUp = _extends({
  ensemble: _index2.default,
  preprocessing: _index4.default,
  tree: _index6.default
}, _index8.default);

exports.ensemble = _index2.default;
exports.preprocessing = _index4.default;
exports.tree = _index6.default;
exports.utils = _index8.default;
exports.default = flareUp;