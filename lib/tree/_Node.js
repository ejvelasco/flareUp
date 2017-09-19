"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Node = function _Node(options) {
  var _this = this;

  _classCallCheck(this, _Node);

  Object.keys(options).forEach(function (key) {
    _this[key] = options[key];
  });
};

exports.default = _Node;