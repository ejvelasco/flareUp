'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buildTree2 = require('./_buildTree');

var _buildTree3 = _interopRequireDefault(_buildTree2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fit(options) {
  var tree = (0, _buildTree3.default)(options);
  return tree;
}

exports.default = fit;