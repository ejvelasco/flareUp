'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _index = require('../lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onLoad(data) {
  var firstRow = data[0];
  var features = _index2.default.range(firstRow.length);
  var label = features[features - 1];
  var examples = _index2.default.format(data, features, label);
  var options = {
    examples: examples,
    fractionToTrain: 0.8,
    stratified: true
  };

  var _flareUp$split = _index2.default.split(options),
      _flareUp$split2 = _slicedToArray(_flareUp$split, 2),
      trainExamples = _flareUp$split2[0],
      testExamples = _flareUp$split2[1];

  var classifier = new _index2.default.tree.DecisionTreeClassifier();
  // const tree = classifier.fit(trainExamples, )
  console.log(classifier);
}

_index2.default.load('credit.csv', onLoad);
