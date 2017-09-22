'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../utils/index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LabelEncoder = function () {
  function LabelEncoder() {
    _classCallCheck(this, LabelEncoder);
  }

  _createClass(LabelEncoder, [{
    key: 'contructor',
    value: function contructor() {
      this['labels'] = null;
    }
  }, {
    key: 'fit',
    value: function fit(y) {
      this['labels'] = (0, _index.no_duplicates)(y);
    }
  }, {
    key: 'fit_transform',
    value: function fit_transform(y) {}
  }, {
    key: 'transform',
    value: function transform(y) {
      var labels = this['labels'];
      var current_labels = (0, _index.no_duplicates)(y);
      var labels_intersection = (0, _index.intersection)(labels, current_labels);
      if ((0, _index.length)(labels_intersection) < (0, _index.length)(labels)) {
        var labels_difference = difference(labels, current_labels);
        var message = 'y contains new labes: ${classes_difference}';
        throw new Error();
      }
    }
  }]);

  return LabelEncoder;
}();

exports.default = LabelEncoder;