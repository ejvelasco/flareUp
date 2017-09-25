'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./../utils/index');

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DecisionTree = function () {
  function DecisionTree() {
    _classCallCheck(this, DecisionTree);
  }

  _createClass(DecisionTree, [{
    key: 'predict',
    value: function predict(X) {
      var _this = this;

      return X.map(function (sample) {
        return (0, _utils.traverse_tree)(_this['root_node'], sample);
      });
    }
  }, {
    key: 'score',
    value: function score(X, y) {
      var y_predicted = this.predict(X);
      var scores = y.map(function (label_actual, i) {
        var label_predicted = y_predicted[i];
        var result = label_actual === label_predicted;
        return result ? 1 : 0;
      });
      return (0, _index.sum)(scores) / (0, _index.length)(y);
    }
  }, {
    key: 'set_up',
    value: function set_up(options) {
      var _this2 = this;

      (0, _index.each)(options, function (key, value) {
        _this2[key] = value;
      });
    }
  }]);

  return DecisionTree;
}();

exports.default = DecisionTree;