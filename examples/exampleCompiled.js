'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _index = require('../lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomSubset(examples) {
  var options = {
    examples: examples,
    fractionToTrain: Math.random()
  };

  var _flareUp$split = _index2.default.split(options),
      _flareUp$split2 = _slicedToArray(_flareUp$split, 2),
      subset1 = _flareUp$split2[0],
      subset2 = _flareUp$split2[1];

  return subset1;
}

function onLoad(data) {
  data = data.filter(function (row) {
    return !row.some(function (value) {
      return value === '?';
    });
  });
  var numberOfColumns = data[0].length;
  var labels = _index2.default.columns(data, numberOfColumns - 1, numberOfColumns);
  var features = _index2.default.range(0, numberOfColumns - 1);
  var examples = _index2.default.columns(data, numberOfColumns - 1);
  examples = _index2.default.format(features, examples, labels);
  var splitOptions = {
    examples: examples,
    fractionToTrain: 0.8
  };
  var classifier = new _index2.default.tree.DecisionTreeClassifier();
  var trainOptions = {
    features: features,
    examples: examples
  };
  var tree = classifier.fit(trainOptions);
  console.log(JSON.stringify(tree, null, '\t'));
}

_index2.default.load('iris.csv', onLoad);
