'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fit = require('./fit');

var _fit2 = _interopRequireDefault(_fit);

var _predict = require('./predict');

var _predict2 = _interopRequireDefault(_predict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var members = {
  fit: _fit2.default,
  predict: _predict2.default
};

var DecisionTreeClassifier = function DecisionTreeClassifier() {
  var _this = this;

  _classCallCheck(this, DecisionTreeClassifier);

  Object.keys(members).forEach(function (key) {
    _this[key] = members[key];
  });
};

exports.default = DecisionTreeClassifier;