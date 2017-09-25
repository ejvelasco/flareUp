'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../../utils/index');

var _utils = require('../utils');

var _defaults = require('./defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _extend_options = require('./extend_options');

var _extend_options2 = _interopRequireDefault(_extend_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecisionTreeClassifier = function (_DecisionTree) {
  _inherits(DecisionTreeClassifier, _DecisionTree);

  function DecisionTreeClassifier() {
    _classCallCheck(this, DecisionTreeClassifier);

    return _possibleConstructorReturn(this, (DecisionTreeClassifier.__proto__ || Object.getPrototypeOf(DecisionTreeClassifier)).apply(this, arguments));
  }

  _createClass(DecisionTreeClassifier, [{
    key: 'fit',
    value: function fit(options) {
      var options_set = (0, _utils.set_defaults)(options, _defaults2.default);
      var options_extended = (0, _extend_options2.default)(options_set);
      var classifier = this;
      classifier.set_up(options_extended);
      classifier['root_node'] = (0, _utils.tree_builder)(classifier);
      return classifier;
    }
  }]);

  return DecisionTreeClassifier;
}(_utils.DecisionTree);

exports.default = DecisionTreeClassifier;