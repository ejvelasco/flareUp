'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _members2 = require('./_members');

var _members3 = _interopRequireDefault(_members2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DecisionTreeClassifier = function DecisionTreeClassifier() {
  var _this = this;

  _classCallCheck(this, DecisionTreeClassifier);

  Object.keys(_members3.default).forEach(function (key) {
    _this[key] = _members3.default[key];
  });
};

exports.default = DecisionTreeClassifier;