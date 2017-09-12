'use strict';

var gini = require('./gini');

function cost(attrib, left, right) {
	var M_L = left.length;
	var M_R = right.length;
	var M = M_L + M_R;
	return M_L / M * gini(left, M) + M_R / M * gini(right, M);
}

module.exports = cost;