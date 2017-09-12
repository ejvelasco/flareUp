const CART = require('./CART');

function train(examples, def) {
	this.tree = CART(examples, def);
	return this.tree;
}

module.exports = train;
