'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../_utils');

var _defaults2 = require('./_defaults');

var _defaults3 = _interopRequireDefault(_defaults2);

var _extra_parameters2 = require('./_extra_parameters');

var _extra_parameters3 = _interopRequireDefault(_extra_parameters2);

var _index = require('../../utils/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecisionTreeClassifier = function (_BaseTree2) {
  _inherits(DecisionTreeClassifier, _BaseTree2);

  function DecisionTreeClassifier() {
    _classCallCheck(this, DecisionTreeClassifier);

    return _possibleConstructorReturn(this, (DecisionTreeClassifier.__proto__ || Object.getPrototypeOf(DecisionTreeClassifier)).apply(this, arguments));
  }

  _createClass(DecisionTreeClassifier, [{
    key: 'fit',
    value: function fit(options) {
      var _this2 = this;

      options = (0, _utils._set_defaults)(options, _defaults3.default);
      options = (0, _extra_parameters3.default)(options);
      (0, _index.for_each)(options, function (options, key) {
        _this2[key] = options[key];
      });
      this['root_node'] = _utils._tree_builder.call(this);
      return this['root_node'];
    }
  }]);

  return DecisionTreeClassifier;
}(_utils._BaseTree);

exports.default = DecisionTreeClassifier;