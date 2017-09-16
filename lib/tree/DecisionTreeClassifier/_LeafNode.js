'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _LeafNode = function _LeafNode(label, depth) {
  _classCallCheck(this, _LeafNode);

  this.type = 'leaf';
  this.label = label;
  this.depth = depth;
};

exports.default = _LeafNode;