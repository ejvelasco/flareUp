'use strict';

var methodsPath = require('./methodsPath');
var isObject = require(methodsPath + 'isObject');

function predict(node, example) {
	if (!isObject(node)) {
		return node;
	}
	var attrib = node['split']['attrib'];
	var val = node['split']['val'];
	var res = example[attrib] <= val ? predict(node['left'], example) : predict(node['right'], example);
	return res;
}

module.exports = predict;