'use strict';

function genIf() {
	var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	var block = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	var indent = arguments[2];

	var conditional = '\n' + indent + 'if (' + condition + ') { \n' + indent + ' ' + block;
	return conditional;
}

module.exports = genIf;