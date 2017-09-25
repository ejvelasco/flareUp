'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _index = require('../lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function on_load(data) {
  var label_encoder = new _index2.default.preprocessing.LabelEncoder();
  var classifier = new _index2.default.tree.DecisionTreeClassifier();
  var data_non_empty = data.filter(function (row) {
    return !row.some(function (value) {
      return value === '?';
    });
  });
  var data_encoded = label_encoder.transform_2d(data_non_empty);
  var data_shuffled = _index2.default.shuffle(data_encoded);
  var n_features = _index2.default.length(data_shuffled[0]);
  var X = _index2.default.columns(data_shuffled, n_features - 1);
  var y = _index2.default.columns(data_shuffled, n_features - 1, n_features);

  var _fu$split_train_test = _index2.default.split_train_test({
    X: X,
    y: y,
    train_size: 0.8
  }),
      _fu$split_train_test2 = _slicedToArray(_fu$split_train_test, 4),
      X_train = _fu$split_train_test2[0],
      X_test = _fu$split_train_test2[1],
      y_train = _fu$split_train_test2[2],
      y_test = _fu$split_train_test2[3];

  classifier.fit({
    X: X_train,
    y: y_train
  });
  var accuracy = classifier.score(X_test, y_test);
  console.log(accuracy);
}

_index2.default.load('credit.csv', on_load);
