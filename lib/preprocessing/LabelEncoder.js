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
      this['y'] = null;
    }
  }, {
    key: 'fit',
    value: function fit(y) {
      this['y'] = (0, _index.no_duplicates)(y);
      return this;
    }
  }, {
    key: 'fit_transform',
    value: function fit_transform(y) {
      this['y'] = (0, _index.no_duplicates)(y);
      return this.transform(y);
    }
  }, {
    key: 'fit_transform_matrix',
    value: function fit_transform_matrix(X) {
      var _this = this;

      var row = X[0];
      var result = row.map(function (values, i) {
        var column = (0, _index.columns)(X, i, i + 1);
        var column_encoded = (0, _index.is_numbers_array)(column) ? column : _this.fit_transform(column);
        return column_encoded;
      });
      return (0, _index.transpose)(result);
    }
  }, {
    key: 'transform',
    value: function transform(y) {
      var y_past = this['y'];
      var y_current = (0, _index.no_duplicates)(y);
      var documentation = 'Please review the documentation for flareUp.preprocessing.LabelEncoder';
      if ((0, _index.length)((0, _index.intersection)(y_current, y_past)) < (0, _index.length)(y_past)) {
        var y_difference = (0, _index.difference)(y_past, y_current);
        var message = 'Array contains new labels: ' + y_difference + '. ' + documentation;
        throw new Error(message);
      }
      var y_current_map = {};
      (0, _index.each)(y_current, function (label, i) {
        y_current_map[label] = i;
      });
      var result = y.map(function (label) {
        return y_current_map[label];
      });
      return result;
    }
  }]);

  return LabelEncoder;
}();

exports.default = LabelEncoder;