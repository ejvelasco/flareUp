'use strict';

var genIf = require('./genIf');
var genElse = require('./genElse');
var methodsPath = require('./methodsPath');
var isObject = require(methodsPath + 'isObject');
var range = require(methodsPath + 'range');

function conditionalTree(node) {
	var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	var mainBlock = '';
	var indent = '';
	depth++;
	range(depth).forEach(function () {
		indent += '  ';
	});
	if (isObject(node)) {
		var attrib = node['split']['attrib'];
		var val = node['split']['val'];
		var condition = 'example[\'' + attrib + '\'] <= ' + val;
		mainBlock += genIf(condition, conditionalTree(node['left'], depth), indent);
		var elseBlock = conditionalTree(node['right'], depth);
		var re = /^return/;
		if (re.test(elseBlock.trim())) {
			mainBlock += '\n' + indent + '}\n' + indent + elseBlock;
		} else {
			mainBlock += genElse(elseBlock, indent);
		}
	} else {
		mainBlock += ' return \'' + node + '\';';
	}
	return mainBlock.trim();
}

module.exports = conditionalTree;