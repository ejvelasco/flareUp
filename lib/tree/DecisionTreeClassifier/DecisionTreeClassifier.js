'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var members = {
  fit: _utils.fit,
  predict: _utils.predict
};

var DecisionTreeClassifier = function DecisionTreeClassifier() {
  var _this = this;

  _classCallCheck(this, DecisionTreeClassifier);

  Object.keys(members).forEach(function (key) {
    _this[key] = members[key];
  });
};

exports.default = DecisionTreeClassifier;