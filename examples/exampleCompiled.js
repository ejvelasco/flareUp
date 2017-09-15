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
  var labels = _index2.default.columns(data, 0, 1);
  var features = _index2.default.range(numberOfColumns - 1);
  var examples = _index2.default.columns(data, 1, numberOfColumns);
  examples = _index2.default.format(features, examples, labels);
  var classifier = new _index2.default.tree.DecisionTreeClassifier();
  var splitOptions = {
    examples: examples,
    fractionToTrain: 0.8
  };

  var _flareUp$split3 = _index2.default.split(splitOptions),
      _flareUp$split4 = _slicedToArray(_flareUp$split3, 2),
      examplesTrain = _flareUp$split4[0],
      examplesTest = _flareUp$split4[1];

  var trainOptions = {
    features: features,
    examples: examplesTrain,
    maxDepth: 10
  };
  classifier.fit(trainOptions);
  var correct = 0;
  examplesTest.forEach(function (example) {
    if (example['label'] === classifier.predict(example)) {
      correct++;
    }
  });
  console.log(correct / examplesTest.length);
}

_index2.default.load('mushrooms.csv', onLoad);
