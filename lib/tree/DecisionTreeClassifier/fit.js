'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decisionTree2 = require('./_decisionTree');

var _decisionTree3 = _interopRequireDefault(_decisionTree2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fit(options) {
  this.rootNode = (0, _decisionTree3.default)(options);
}

exports.default = fit;