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
    value: function fit(j) {
      this['labels'] = (0, _index.no_duplicates)(j);
      return this;
    }
  }, {
    key: 'fit_transform',
    value: function fit_transform(j) {
      this['labels'] = (0, _index.no_duplicates)(j);
      return this.transform(j);
    }
  }, {
    key: 'transform',
    value: function transform(j) {
      var labels = this['labels'];
      var current_labels = (0, _index.no_duplicates)(j);
      var tip = 'Please review the documentation for flareUp.preprocessing.LabelEncoder';
      if ((0, _index.length)((0, _index.intersection)(current_labels, labels)) < (0, _index.length)(labels)) {
        var labels_difference = (0, _index.difference)(labels, current_labels).join(', ');
        var message = 'j contains new labels: ' + labels_difference + '. ' + tip;
        throw new Error(message);
      }
      var result = j.map(function (label) {
        return labels.indexOf(label);
      });
      return result;
    }
  }, {
    key: 'transform_2d',
    value: function transform_2d(X) {
      var label_encoder = this;
      var first_row = X[0];
      var result = first_row.map(function (values, i) {
        var j = (0, _index.columns)(X, i, i + 1);
        var j_processed = (0, _index.is_numbers_array)(j) ? j : label_encoder.fit_transform(j);
        return j_processed;
      });
      return (0, _index.transpose)(result);
    }
  }]);

  return LabelEncoder;
}();

exports.default = LabelEncoder;