'use strict';

var _utils = require('../../utils/utils');

function predict(node, example) {
  if (!(0, _utils.isObjectLiteral)(node)) {
    return node;
  }
  var feature = node['feature'];
  var threshold = node['threshold'];
  var result = example[feature] <= threshold ? predict(node['left'], example) : predict(node['right'], example);
  return result;
}

module.exports = predict;