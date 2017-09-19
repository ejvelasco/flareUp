'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecisionTreeClassifier = undefined;

var _DecisionTreeClassifier = require('./DecisionTreeClassifier/DecisionTreeClassifier');

var _DecisionTreeClassifier2 = _interopRequireDefault(_DecisionTreeClassifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tree = {
  DecisionTreeClassifier: _DecisionTreeClassifier2.default
};

exports.DecisionTreeClassifier = _DecisionTreeClassifier2.default;
exports.default = tree;