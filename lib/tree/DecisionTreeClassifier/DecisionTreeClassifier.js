'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _members = require('./members');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var members = {
  fit: _members.fit,
  predict: _members.predict
};

var DecisionTreeClassifier = function DecisionTreeClassifier() {
  var _this = this;

  _classCallCheck(this, DecisionTreeClassifier);

  Object.keys(members).forEach(function (key) {
    _this[key] = members[key];
  });
};

exports.default = DecisionTreeClassifier;