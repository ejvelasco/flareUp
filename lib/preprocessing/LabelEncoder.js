'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LabelEncoder = function () {
  function LabelEncoder() {
    _classCallCheck(this, LabelEncoder);
  }

  _createClass(LabelEncoder, [{
    key: 'contructor',
    value: function contructor() {
      this['classes'] = null;
    }
  }, {
    key: 'fit',
    value: function fit(y) {
      this['classes'] = y;
      console.log(this['classes']);
    }
  }, {
    key: 'fit_transform',
    value: function fit_transform(y) {}
  }, {
    key: 'transform',
    value: function transform(y) {}
  }]);

  return LabelEncoder;
}();

exports.default = LabelEncoder;