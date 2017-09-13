'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils/utils');

var _predict = require('./predict');

var _predict2 = _interopRequireDefault(_predict);

var _pretty = require('./pretty');

var _pretty2 = _interopRequireDefault(_pretty);

var _split = require('./split');

var _split2 = _interopRequireDefault(_split);

var _toConditionals = require('./toConditionals');

var _toConditionals2 = _interopRequireDefault(_toConditionals);

var _fit = require('./fit');

var _fit2 = _interopRequireDefault(_fit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var members = {
  fit: _fit2.default,
  format: _utils.format,
  pretty: _pretty2.default,
  predict: _predict2.default,
  split: _split2.default,
  toConditionals: _toConditionals2.default
};

var DecisionTreeClassifier = function DecisionTreeClassifier() {
  _classCallCheck(this, DecisionTreeClassifier);

  this.tree = null;
};

Object.keys(members).forEach(function (key) {
  DecisionTreeClassifier[key] = members[key];
});

exports.default = DecisionTreeClassifier;