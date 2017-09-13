const CART = require('./CART');

function fit(examples, def) {
	this.tree = CART(examples, def);
	return this.tree;
}

module.exports = fit;
