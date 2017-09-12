'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Classifier = require('../Classifier');
var memberNames = ['format', 'predict', 'pretty', 'split', 'toConditionals', 'train'];
var members = memberNames.map(function (name) {
	var member = {
		name: name,
		method: require('./' + name)
	};
	return member;
});

var CARTClassifier = function (_Classifier) {
	_inherits(CARTClassifier, _Classifier);

	function CARTClassifier() {
		_classCallCheck(this, CARTClassifier);

		var _this = _possibleConstructorReturn(this, (CARTClassifier.__proto__ || Object.getPrototypeOf(CARTClassifier)).call(this, members));

		_this.tree = null;
		return _this;
	}

	return CARTClassifier;
}(Classifier);

module.exports = CARTClassifier;