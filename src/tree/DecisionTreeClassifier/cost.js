const gini = require('./gini');

function cost(attrib, left, right) {
	const M_L = left.length;
	const M_R = right.length;
	const M = M_L + M_R;
	return (M_L/M)*gini(left, M) + (M_R/M)*gini(right, M); 
}

module.exports = cost;