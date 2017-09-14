'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _index = require('../lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomSubset(examples, fraction) {
  var length = Math.floor(fraction * examples.length);
  var subset = [];
  _index2.default.range(length).forEach(function () {
    var randomIndex = Math.floor(Math.random() * length);
    subset.push(examples[randomIndex]);
  });
  return subset;
}

function onLoad(data) {
  data = data.filter(function (row) {
    return !row.some(function (value) {
      return value === '?';
    });
  });
  var numberOfColumns = data[0].length;
  var labels = _index2.default.columns(data, numberOfColumns - 1, numberOfColumns);
  var features = _index2.default.range(numberOfColumns - 1);
  var examples = _index2.default.columns(data, numberOfColumns - 1);
  examples = _index2.default.format(features, examples, labels);
  var splitOptions = {
    examples: examples,
    fractionToTrain: 0.8
  };

  var _flareUp$split = _index2.default.split(splitOptions),
      _flareUp$split2 = _slicedToArray(_flareUp$split, 2),
      trainExamples = _flareUp$split2[0],
      testExamples = _flareUp$split2[1];

  var trainSets = [];
  _index2.default.range(10).forEach(function () {
    trainSets.push(randomSubset(examples, .8));
  });
  var classifier = new _index2.default.tree.DecisionTreeClassifier();
  var trees = trainSets.map(function (set) {
    var trainOptions = {
      features: features,
      examples: set
    };
    var tree = classifier.fit(trainOptions);
    return tree;
  });
  var numRight = 0;
  testExamples.forEach(function (example) {
    var predictions = trees.map(function (tree) {
      return classifier.predict(tree, example);
    });
    if (example['label'] === _index2.default.mode(predictions)) {
      numRight++;
    }
  });
  console.log(numRight / testExamples.length);
}

_index2.default.load('credit.csv', onLoad);
