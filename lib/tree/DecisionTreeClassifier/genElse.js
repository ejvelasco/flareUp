'use strict';

function genElse() {
	var block = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var indent = arguments[1];

	var conditional = '\n' + indent + '} else {\n' + indent + ' ' + block + '\n' + indent + '}';
	return conditional;
}

module.exports = genElse;