'use strict';

var _utils = require('./_utils');

function predict(example) {
  var rootNode = this['rootNode'];
  var prediction = (0, _utils._traverseTree)(rootNode, example);
  return prediction;
}

module.exports = predict;