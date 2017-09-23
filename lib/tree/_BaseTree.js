"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { _setDefaults, _traverseTree } from './_utils';
var _BaseTree = function () {
  function _BaseTree() {
    _classCallCheck(this, _BaseTree);
  }

  _createClass(_BaseTree, [{
    key: "predict",
    value: function predict(X) {
      // const root_node = this['root_node'];
      return X;
      // const prediction = _traverse_tree(root_node, example);
      // return prediction;
    }
  }]);

  return _BaseTree;
}();

exports.default = _BaseTree;