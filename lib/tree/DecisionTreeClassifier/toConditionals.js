'use strict';

var fs = require('fs');
var conditionalTree = require('./conditionalTree');

function toConditionals(node) {
	var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	var functionName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

	var docs = 'Please review the CARTClassifier.toConditionals() documentation.';
	if (!fileName.length) {
		var msg = 'No target file name was provided. ' + docs;
		throw new Error(msg);
	}
	if (!functionName.length) {
		var _msg = 'No function name was provided. ' + docs;
		throw new Error(_msg);
	}
	var body = conditionalTree(node);
	var conditionalTreeClassifier = 'function ' + functionName + '(example) {\n  ' + body + '\n}\n\nmodule.exports = ' + functionName + ';';
	fs.writeFile(fileName, conditionalTreeClassifier, function (err) {
		if (err) throw err;
		console.log('Conditional Tree Classifier saved as ' + fileName);
	});
}

module.exports = toConditionals;